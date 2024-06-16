export default interface Plan {
    id: string;
    object: string;
    active: boolean;
    aggregate_usage: null | string;
    amount: number;
    amount_decimal: string;
    billing_scheme: string;
    created: number;
    currency: string;
    interval: string;
    interval_count: number;
    livemode: boolean;
    metadata: Record<string, any>;
    meter: null | string;
    nickname: string;
    product: string;
    tiers_mode: null | string;
    transform_usage: null | string;
    trial_period_days: null | number;
    usage_type: string;
}