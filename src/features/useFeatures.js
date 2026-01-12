// src/sections/Features/useFeatures.js
export const useFeatures = () => {
  const features = [
    {
      id: 1,
      title: "Product Support",
      description: "Up to 3 years on-site warranty available for your peace of mind.",
      icon: "headset",
    },
    {
      id: 2,
      title: "Personal Account",
      description: "With big discounts, free delivery and a dedicated support specialist.",
      icon: "user",
    },
    {
      id: 3,
      title: "Amazing Savings",
      description: "Up to 70% off new Products, you can be sure of the best price.",
      icon: "tag",
    },
  ];

  return { features };
};