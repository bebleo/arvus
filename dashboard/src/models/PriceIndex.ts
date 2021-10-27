export interface PriceIndexLicense {
  title: string;
  version: string;
  url: string;
}

export interface PriceIndex {
  id: string;
  productId: number;
  title: string;
  description: string;
  source: string;
  source_data_url: string;
  source_description_url: string;
  last_updated: Date;
  related?: string[];
  license?: PriceIndexLicense;
  keywords?: string;
}