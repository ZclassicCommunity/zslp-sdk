export interface IConfig {
  restURL?: string
  slpdbURL?: string
}

export interface ICreateConfig {
  fundingAddress: string | string[]
  fundingWif: string | string[]
  tokenReceiverAddress: string
  batonReceiverAddress: string
  bchChangeReceiverAddress: string
  decimals: number
  name: string
  symbol: string
  documentUri: string
  documentHash: any
  initialTokenQty: number
}

export interface IMintConfig {
  fundingAddress: string | string[]
  fundingWif: string | string[]
  tokenReceiverAddress: string
  batonReceiverAddress: string
  bchChangeReceiverAddress: string
  tokenId: string
  additionalTokenQty: number,
  burnBaton?: boolean
}

export interface ISendConfig {
  fundingAddress: string | string[]
  fundingWif: string | string[]
  tokenReceiverAddress: string | string[]
  bchChangeReceiverAddress: string
  tokenId: string
  amount: number | number[]
}

export interface IBurnConfig {
  fundingAddress: string | string[]
  fundingWif: string | string[]
  tokenId: string
  bchChangeReceiverAddress: string
  amount: number
}

export interface QueryInterface {
  amount?: number
  label?: string
  message?: string
}

export interface SLPDBResponse {
  message: string
}

export interface SLPSocketConfig {
  restURL?: string
  wsURL?: string
  slpsocketURL?: string
  callback?: Function
}

export interface IBulkTransaction {
  tokenId: string;
  address: string;
}
