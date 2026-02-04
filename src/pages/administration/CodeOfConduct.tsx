import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink } from "lucide-react";

const CodeOfConduct = () => {
  const documents = [
    {
      title: "Code of Conduct for Student",
      url: "http://snbpacsms.com/WebsitePages/PDF/CODE%20OF%20CONDUCT%20FOR%20STUDENT.pdf",
    },
    {
      title: "Code of Conduct for Teachers",
      url: "http://snbpacsms.com/WebsitePages/PDF/CODE%20OF%20CONDUCT%20FOR%20TEACHERS.pdf",
    },
    {
      title: "Core Values",
      url: "http://snbpacsms.com/WebsitePages/PDF/core_values.pdf",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Code of Conduct"
        description="Code of conduct policies and guidelines for students and faculty"
        breadcrumbs={[
          { label: "Administration", href: "/administration/organogram" },
          { label: "Code of Conduct" },
        ]}
      />

      <section className="py-12">
        <div className="container">
          <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Code of Conduct Documents</h2>
              <p className="text-muted-foreground mb-6">
                SNBP ACS maintains high standards of conduct for both students and faculty members. 
                Please review the following documents to understand our code of conduct policies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="bg-secondary/50 rounded-lg p-4 border border-border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-foreground mb-3">{doc.title}</h3>
                  <Button variant="outline" size="sm" asChild className="w-full">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileDown className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CodeOfConduct;
