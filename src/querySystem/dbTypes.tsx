export type ReserveData = {
  __typename: string;
  id: string;
  underlyingAsset: string;
  name: string;
  symbol: string;
  decimals: number;
  liquidityRate: string;
  reserveLiquidationBonus: string;
  lastUpdateTimestamp: number;
  aToken: {
    __typename: string;
    id: string;
  };
};

export type UserReserve = {
  __typename: string;
  reserve: {
    id: string;
    underlyingAsset: string;
    name: string;
    symbol: string;
    decimals: number;
    liquidityRate: string;
    reserveLiquidationBonus: string;
    lastUpdateTimestamp: number;
  };
  scaledATokenBalance: string;
  usageAsCollateralEnabledOnUser: boolean;
  scaledVariableDebt: string;
  variableBorrowIndex: string;
  stableBorrowRate: string;
  principalStableDebt: string;
  stableBorrowLastUpdateTimestamp: number;
};

export type User = {
  __typename: string;
  id: string;
  reserves: UserReserve[];
};

export type lastEventTimestamp = {
  eventName: number;
  timestamp: number;
};

export type Schema = {
  users: User[];
  lastEventTimestamps: lastEventTimestamp[];
  poolReserves: poolReserve[];
  userVitals: UserVitals[];
};

export type poolReserve = {
  id: string;
  underlyingAsset: string;
  name: string;
  symbol: string;
  decimals: number;
  isActive: boolean;
  isFrozen: boolean;
  usageAsCollateralEnabled: boolean;
  aTokenAddress: string;
  stableDebtTokenAddress: string;
  variableDebtTokenAddress: string;
  borrowingEnabled: boolean;
  stableBorrowRateEnabled: boolean;
  reserveFactor: string;
  baseLTVasCollateral: string;
  optimalUtilisationRate: string;
  stableRateSlope1: string;
  stableRateSlope2: string;
  averageStableRate: string;
  stableDebtLastUpdateTimestamp: number;
  baseVariableBorrowRate: string;
  variableRateSlope1: string;
  variableRateSlope2: string;
  liquidityIndex: string;
  reserveLiquidationThreshold: string;
  reserveLiquidationBonus: string;
  variableBorrowIndex: string;
  variableBorrowRate: string;
  avg30DaysVariableBorrowRate?: string;
  availableLiquidity: string;
  stableBorrowRate: string;
  liquidityRate: string;
  avg30DaysLiquidityRate?: string;
  totalPrincipalStableDebt: string;
  totalScaledVariableDebt: string;
  lastUpdateTimestamp: number;
  price: {
    priceInEth: string;
  };
};

export type ReserveRatesData = {
  id: string;
  symbol: string;
  paramsHistory: {
    variableBorrowIndex: string;
    liquidityIndex: string;
    timestamp: number;
  }[];
};

export type ComputedReserveData = {
  utilizationRate: string;
  totalStableDebt: string;
  totalVariableDebt: string;
  totalDebt: string;
  totalLiquidity: string;
} & ReserveData;

export type ComputedUserReserve = UserReserve & {
  underlyingBalance: string;
  underlyingBalanceETH: string;
  underlyingBalanceUSD: string;

  variableBorrows: string;
  variableBorrowsETH: string;
  variableBorrowsUSD: string;

  stableBorrows: string;
  stableBorrowsETH: string;
  stableBorrowsUSD: string;

  totalBorrows: string;
  totalBorrowsETH: string;
  totalBorrowsUSD: string;
};

export type ComputedUserReserveOpt = UserReserve & {
  underlyingBalance: string;
  underlyingBalanceETH: string;

  variableBorrows: string;
  variableBorrowsETH: string;

  stableBorrows: string;
  stableBorrowsETH: string;

  totalBorrows: string;
  totalBorrowsETH: string;
};

export type UserSummaryData = {
  id: string;
  totalLiquidityETH: string;
  totalLiquidityUSD: string;
  totalCollateralETH: string;
  totalCollateralUSD: string;
  totalBorrowsETH: string;
  totalBorrowsUSD: string;
  availableBorrowsETH: string;
  currentLoanToValue: string;
  currentLiquidationThreshold: string;
  healthFactor: string;
  reservesData: ComputedUserReserve[];
};

export type UserSummaryDataOpt = {
  id: string;
  totalLiquidityETH: string;
  totalCollateralETH: string;
  totalBorrowsETH: string;
  currentLiquidationThreshold: string;
  healthFactor: string;
};

export type UserVitals = {
  id: string;
  totalLiquidityETH: string;
  totalCollateralETH: string;
  totalBorrowsETH: string;
  currentLiquidationThreshold: string;
  healthFactor: string;
  healthFactorNum: number;
};
