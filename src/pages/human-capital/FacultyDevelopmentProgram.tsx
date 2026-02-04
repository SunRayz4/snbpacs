import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { API_BASE } from "@/config/api";

const FacultyDevelopmentProgram = () => {
  return (
    <Layout>
      <PageHeader
        title="Faculty Development Program"
        description="Faculty development initiatives and programs at SNBP ACS"
        breadcrumbs={[
          { label: "Human Capital", href: "/human-capital/teaching-staff" },
          { label: "Faculty Development Program" },
        ]}
      />

      <section className="py-12">
        <div className="container">
          <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Faculty Development Program (FDP)</h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-8">
              {/* Left Image */}
              <div className="lg:col-span-1">
                <div className="bg-secondary/50 rounded-lg p-4 h-full flex items-center justify-center">
                  <img
                    src={`${API_BASE}/images/fdp-left.jpg`}
                    alt="Faculty Development Program"
                    className="w-full h-auto rounded-lg object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-1">
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-4">Introduction</h3>
                  <p className="text-muted-foreground mb-4">
                    Faculty is the foundation & main stream of any educational institute. In changing 
                    environment of education system faculty plays a vital role in the student development and in the 
                    institute growth. Today there is need of creativity and innovations. These creativities and 
                    innovations are only made by the transmission of knowledge.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    For doing this, educational institutes need not only to be upgraded with changing 
                    technologies but also with the means of communication.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    To cope up with changing needs FDP will be focus on improving teacher's learning ways and problem faced. 
                    Teachers should not only play the role of traditional teachers but should become facilitators. 
                    Also providing practical knowledge to students through connecting them with the real world problems is also necessary. 
                    Our aim is to develop & achieve the knowledge transfer through such kinds of the FDP activities.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-1">
                <div className="bg-secondary/50 rounded-lg p-4 h-full flex items-center justify-center">
                  <img
                    src={`${API_BASE}/images/fdp-right.jpg`}
                    alt="Faculty Development Program"
                    className="w-full h-auto rounded-lg object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Faculty Development of SNBP ACS (2018-2019)</h3>
              <p className="text-muted-foreground mb-4">
                The SNBP ACS conducts the Faculty Development Programs for the faculty members to 
                improve the skill and the ability which is very essential in this education field. 
                The skillful and developed faculty members can play very important role in the student development.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">FDP on Teachers Self Appraisal</h3>
              <p className="text-muted-foreground">
                The institute has organized a Faculty Development Program on "Teachers Self Appraisal" in July 2018. 
                The FDP is delivered by Dr. Sudhir Atwadkar, vice-principal, SNBP ACS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FacultyDevelopmentProgram;
