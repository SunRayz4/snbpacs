import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { nonTeachingData } from "@/data/human-capital/nonteachingData";

const NonTeaching = () => {
  return (
    <Layout>
      <PageHeader
        title="Non-Teaching Staff"
        description="Meet our dedicated non-teaching staff who ensure smooth operations and administrative support."
        breadcrumbs={[
          { label: "Human Capital", href: "/human-capital" },
          { label: "Non-Teaching Staff" },
        ]}
      />

      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            {/* <h2 className="fw-bold mb-2">Our Non-Teaching Staff</h2> */}
            <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
              SNBP ACS Non-Teaching Staff provide essential support to our academic programs, administrative operations, and student services.
            </p>
          </div>

          <div className="row g-4">
            {nonTeachingData.map((staff) => (
              <div className="col-12 col-md-6 col-lg-4" key={staff.id}>
                {/* Horizontal card */}
                <div className="card shadow-sm border-0 h-100 p-3 d-flex flex-column flex-md-row align-items-center">

                  {/* Image */}
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="rounded-circle border border-3 border-primary mb-3 mb-md-0 me-md-3"
                    style={{ width: "90px", height: "90px", objectFit: "cover" }}
                  />

                  {/* Content */}
                  <div className="text-center text-md-start flex-grow-1">
                    <h5 className="fw-bold text-primary mb-1">
                      <i className="fas fa-user me-2"></i>
                      {staff.name}
                    </h5>
                    <p className="mb-1">
                      <i className="fas fa-briefcase text-secondary me-2"></i>
                      {staff.designation}
                    </p>
                    <p className="mb-1">
                      <i className="fas fa-graduation-cap text-success me-2"></i>
                      {staff.qualification}
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-clock text-warning me-2"></i>
                      {staff.experience} Experience
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NonTeaching;
