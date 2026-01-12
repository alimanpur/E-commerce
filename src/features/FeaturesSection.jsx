// // src/sections/Features/FeaturesSection.jsx
// import React from 'react';
// import { useFeatures } from './useFeatures';
// import { Headset, UserCircle, Tag } from 'lucide-react';

// const FeaturesSection = () => {
//   const { features } = useFeatures();

//   // Mapping the icon strings to Lucide components
//   const getIcon = (iconName) => {
//     const props = { size: 32, className: "text-white" };
//     switch (iconName) {
//       case 'headset': return <Headset {...props} />;
//       case 'user': return <UserCircle {...props} />;
//       case 'tag': return <Tag {...props} />;
//       default: return null;
//     }
//   };

//   return (
//     <section className="py-16 bg-white px-4">
//       {/* <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"> */}
//         {/* {features.map((feature) => (
//           <div key={feature.id} className="flex flex-col items-center text-center"> */}
//             {/* Icon Container - Uses 'brand-blue' from your palette */}
//             {/* <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-6 shadow-md">
//               {getIcon(feature.icon)}
//             </div> */}
            
//             {/* Typography matches Figma weight and color */}
//             {/* <h3 className="text-xl font-bold text-black mb-3">
//               {feature.title}
//             </h3>
//             <p className="text-brand-gray text-sm leading-relaxed max-w-70">
//               {feature.description}
//             </p> */}
//           {/* </div> */}
//         {/* } */}
//       {/* </div> */}
//     </section>
//   );
// };

// export default FeaturesSection;