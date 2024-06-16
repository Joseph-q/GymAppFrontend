import { PaymentMethod } from '../../constants/PaymentMethod.enum';

export interface Subcription {
  id: string;
  token: string;
  plan: string;
  expires_at: number;
  createdAt: number;
  updatedAt: number;
  payment_method: PaymentMethod;
}
