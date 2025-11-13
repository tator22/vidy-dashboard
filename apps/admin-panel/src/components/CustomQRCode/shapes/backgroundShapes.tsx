import { BackgroundFunctionArgumentType, BackgroundType } from "../types";

export const backgrounds: Record<
  BackgroundType,
  BackgroundFunctionArgumentType
> = {
  none: (): any => {
    return <div />;
  },
};
