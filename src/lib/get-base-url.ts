type ModeType = { [key: string]: string };

export const getBaseUrlByMode = (env: any, stage: string): string => {
  const modeStage: ModeType = {
    production: env.VITE_API_PRODUCTION_URL,
    stage: env.VITE_API_STAGE_URL,
    development: env.VITE_API_BASE_URL,
  };

  return modeStage[stage] as string;
};
