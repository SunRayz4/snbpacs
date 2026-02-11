// import { Layout } from "@/components/layout/Layout";
// import { PageHeader } from "@/components/common/PageHeader";

// const AcademicLeader = () => {
//   return (
//     <Layout>
//       <PageHeader
//         title="Academic Leadership"
//         description="Meet our academic leadership team"
//         breadcrumbs={[
//           { label: "Administration", href: "/administration/board-of-management" },
//           { label: "Academic Leadership" },
//         ]}
//       />
      
//       <section className="py-8">
//         <div className="container">
//           <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
//             <h2 className="text-2xl font-bold mb-1">Academic Leadership Team</h2>
//             <p className="text-muted-foreground">
//               Academic leadership content goes here...
//             </p>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

// export default AcademicLeader;




import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const AcademicLeader = () => {
  const pdfUrl = `${import.meta.env.VITE_STATIC_ASSETS}/PDF/administration/AcademicLeader.pdf`;

  return (
    <Layout>
      <PageHeader
        title="Academic Leadership"
        description="Meet our academic leadership team"
        breadcrumbs={[
          { label: "Administration", href: "/administration/board-of-management" },
          { label: "Academic Leadership" },
        ]}
      />

      <section className="py-8">
        <div className="container">
          <div className="bg-card rounded-xl p-6 shadow-soft border border-border text-center">
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Click to open PDF"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon 
                icon={faFilePdf} 
                size="3x" 
                style={{ color: "#dc3545" }} 
              />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AcademicLeader;

