import { CampaignTemplate } from "@/types/templates";

export const campaignTemplates: CampaignTemplate[] = [
  {
    id: "flash-sale",
    name: "Flash Sale",
    campaignType: "Promotion",
    campaignHook: "⚡ 24-Hour Flash Sale – Up to 50% Off!",
    tone: "Urgent",
    callToAction: "Shop Now",
    extraInformation:
      "Limited-time discounts on best-selling products. Offer valid for 24 hours only. No code required. Stocks are limited.",
  },
  {
    id: "welcome-offer",
    name: "Welcome Offer",
    campaignType: "Promotion",
    campaignHook: "Welcome! Here’s 20% Off Your First Order 🎉",
    tone: "Friendly",
    callToAction: "Claim Your Discount",
    extraInformation:
      "Use code WELCOME20 at checkout. Valid for first-time customers only. Offer expires in 7 days.",
  },
  {
    id: "abandoned-cart",
    name: "Abandoned Cart Reminder",
    campaignType: "CTA For Abandoned Cart",
    campaignHook: "You Left Something Behind 👀",
    tone: "Friendly",
    callToAction: "Complete Your Purchase",
    extraInformation:
      "Your selected items are still in your cart. Limited stock available. Checkout now before they’re gone.",
  },
  {
    id: "abandoned-cart-discount",
    name: "Abandoned Cart + Discount",
    campaignType: "CTA For Abandoned Cart",
    campaignHook: "Still Thinking It Over? Here’s 10% Off",
    tone: "Urgent",
    callToAction: "Grab It Before It’s Gone",
    extraInformation:
      "Use code COMEBACK10 within the next 24 hours. Discount applies only to items currently in your cart.",
  },
  {
    id: "product-launch",
    name: "Product Launch",
    campaignType: "Product Launch",
    campaignHook: "Introducing Our Newest Innovation ✨",
    tone: "Excited",
    callToAction: "Explore Now",
    extraInformation:
      "Be among the first to experience our latest product. Early buyers get exclusive perks and bonuses.",
  },
  {
    id: "limited-time-offer",
    name: "Limited-Time Offer",
    campaignType: "Promotion",
    campaignHook: "This Week Only – Exclusive Savings Inside",
    tone: "Professional",
    callToAction: "View Offers",
    extraInformation:
      "Special discounts available for a limited period. Online exclusive. Terms and conditions apply.",
  },
  {
    id: "newsletter-launch",
    name: "Newsletter Launch",
    campaignType: "Newsletter Launch",
    campaignHook: "Our First Edition Is Live!",
    tone: "Professional",
    callToAction: "Read the Newsletter",
    extraInformation:
      "Get insider updates, early access deals, and expert insights delivered straight to your inbox every week.",
  },
  {
    id: "holiday-sale",
    name: "Holiday Sale",
    campaignType: "Promotion",
    campaignHook: "Celebrate with Special Holiday Deals 🎊",
    tone: "Excited",
    callToAction: "Shop the Celebration",
    extraInformation:
      "Festive discounts across all categories. Free shipping on orders above ₹999. Offer valid until the end of the season.",
  },
  {
    id: "last-chance",
    name: "Last Chance Reminder",
    campaignType: "Promotion",
    campaignHook: "Final Hours – Don’t Miss Out!",
    tone: "Urgent",
    callToAction: "Shop Before It Ends",
    extraInformation:
      "Sale ends tonight at 11:59 PM. Prices go back to normal after that. No extensions.",
  },
  {
    id: "referral-offer",
    name: "Referral Offer",
    campaignType: "Promotion",
    campaignHook: "Give ₹500, Get ₹500 🎁",
    tone: "Friendly",
    callToAction: "Refer a Friend",
    extraInformation:
      "Invite friends and both of you receive rewards after their first successful purchase.",
  },
  {
    id: "vip-early-access",
    name: "VIP Early Access",
    campaignType: "Promotion",
    campaignHook: "VIP Access – Just for You",
    tone: "Professional",
    callToAction: "Unlock Early Access",
    extraInformation:
      "Shop new arrivals 24 hours before public launch. Limited inventory reserved for VIP members.",
  },
  {
    id: "back-in-stock",
    name: "Back in Stock",
    campaignType: "Promotion",
    campaignHook: "It’s Back in Stock!",
    tone: "Urgent",
    callToAction: "Buy Now",
    extraInformation:
      "Your favorite item is available again. Popular sizes sell out fast — secure yours today.",
  },
];