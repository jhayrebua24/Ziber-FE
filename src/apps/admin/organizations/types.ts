export interface OrganizationType {
  id: number;
  name: string;
  description: null | string;
  created_at: string;
}

export interface OrganizationModalType {
  onClose: () => void;
  data?: OrganizationModalType;
  isEditMode?: boolean;
}
