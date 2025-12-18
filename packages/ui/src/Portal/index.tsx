import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type FC,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type PortalProps = {
  anchorEl: HTMLElement | null;
  children: ReactNode;
  offset?: number;
};

export const Portal: FC<PortalProps> = ({ anchorEl, children, offset = 0 }) => {
  // Hooks
  const portalRef = useRef<HTMLDivElement | null>(null);

  // State
  const [style, setStyle] = useState<CSSProperties>({
    position: "absolute",
    top: 0,
    left: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  // ✅ create a new DOM node only once
  if (!portalRef.current) {
    portalRef.current = document.createElement("div");
  }

  // ✅ safe append & remove to avoid removeChild error
  useEffect(() => {
    const el = portalRef.current!;
    if (!document.body.contains(el)) {
      document.body.appendChild(el);
    }

    return () => {
      if (el.parentNode === document.body) {
        document.body.removeChild(el);
      }
    };
  }, []);

  // ✅ auto-position relative to anchorEl
  useEffect(() => {
    if (!anchorEl) return;

    const updatePosition = () => {
      if (!anchorEl || !portalRef.current) return;

      // 🟢 Always recalculate rect — ensures position updates when user scrolls
      const rect = anchorEl.getBoundingClientRect();

      const box = portalRef.current.getBoundingClientRect();

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let top = rect.bottom + offset;
      let left = rect.left;

      // bottom overflow → move top
      if (top + box.height > viewportHeight) {
        top = rect.top - box.height - offset;
      }

      // right overflow → shift left
      if (left + box.width > viewportWidth) {
        left = viewportWidth - box.width - offset;
      }

      // left overflow → shift right
      if (left < 0) {
        left = offset;
      }

      // top overflow → move bottom
      if (top < 0) {
        top = rect.bottom + offset;
      }

      setStyle({
        position: "absolute",
        top: `${top + window.scrollY}px`,
        left: `${left + window.scrollX}px`,
        zIndex: 1000000000,
        minWidth: rect.width,
      });
    };

    updatePosition(); // ✅ initial position update

    // 🆕 Create scroll handler for continuous updates on scroll
    const handleScroll = () => {
      // 🟢 Update position dynamically on every scroll
      updatePosition();
    };

    // 🆕 Add scroll listener in capture phase to catch nested scrolls
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", handleScroll, true); // 🆕 added `true`

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", handleScroll, true); // 🆕 added `true`
    };
  }, [anchorEl, offset]);

  useEffect(() => {
    if (anchorEl) {
      // fade in
      setIsVisible(true);
    } else if (portalRef.current) {
      // fade out before unmounting
      setIsVisible(false);
    }
  }, [anchorEl]);

  // 🆕 CSS transition styles
  const animatedStyle: CSSProperties = {
    ...style,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.95)",
    transition: "opacity 0.2s ease, transform 0.2s ease",
  };

  if (!anchorEl && !isVisible) return null;

  return createPortal(
    <div ref={portalRef} style={animatedStyle}>
      {children}
    </div>,
    document.body
  );
};
