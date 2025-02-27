export const COUPON_CODES = {
    MEDIGO1008: "MEDIGO1008",
    MEDIGO0207: "MEDIGO0207",
    MEDIGO0505: "MEDIGO0505",
    MEDIGO1088: "MEDIGO1088",
    MEDIGOAR: "MEDIGOAR"
} as const;

export type CouponCode = keyof typeof COUPON_CODES;