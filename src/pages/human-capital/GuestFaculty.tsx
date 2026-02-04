import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const GuestFaculty = () => {
  const guestFacultyData = [
    { no: 1, name: "Mr. Manoj Padghan", topic: "Career Guidance in Accountancy" },
    { no: 2, name: "Mr. Shrinivas Iyyer", topic: "Employability Skills" },
    { no: 3, name: "Dr. Asha Shelke", topic: "Health & Hygiene" },
    { no: 4, name: "Dr. Geetanjali Shinde", topic: "Health Issue & Care" },
    { no: 5, name: "Mr. Sanjay Kulkarni", topic: "Voting Awareness" },
    { no: 6, name: "Mr. Prashant Somani", topic: "Corporate Expectations" },
    { no: 7, name: "Mr. Sumedh Bhalerao", topic: "Campus Interview Skills" },
    { no: 8, name: "Mr. Arvind Navagire", topic: "Career In Computer Design" },
    { no: 9, name: "Prof. Rupa Naik", topic: "Career Guidance in Accountancy" },
    { no: 10, name: "Dr. Bhushan Pardeshi", topic: "Banking & Finance" },
    { no: 11, name: "Ms. Reshma Nathani", topic: "Cloud Base Data Management" },
    { no: 12, name: "Mr. Indrajeet Jadhav", topic: "Personality Development & Communication" },
    { no: 13, name: "Mrs. Rashmi Shukla", topic: "Teacher and Students Relation" },
    { no: 14, name: "Dr. Sandeep Dive", topic: "Digital Marketing" },
    { no: 15, name: "Mr. Rupesh Mayekar", topic: "Tally & Its Applications" },
    { no: 16, name: "Mr. Sagar Jadhav", topic: "Agriculture & Agro Business" },
    { no: 17, name: "Mrs. Sugandha Dani", topic: "Cyber Security" },
  ];

  return (
    <Layout>
      <PageHeader
        title="Guest Faculty"
        description="Expert guest faculty members who have contributed to our academic programs"
        breadcrumbs={[
          { label: "Human Capital", href: "/human-capital/teaching-staff" },
          { label: "Guest Faculty" },
        ]}
      />

      <section className="py-12">
        <div className="container">
          <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-4">Guest Faculty List</h2>
              <p className="text-muted-foreground">
                SNBP ACS regularly invites distinguished guest faculty members to share their expertise 
                and provide students with industry insights and practical knowledge.
              </p>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-20">No.</TableHead>
                    <TableHead>Name of Guest</TableHead>
                    <TableHead>Topics</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {guestFacultyData.map((faculty) => (
                    <TableRow key={faculty.no}>
                      <TableCell className="font-medium">{faculty.no}</TableCell>
                      <TableCell>{faculty.name}</TableCell>
                      <TableCell>{faculty.topic}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GuestFaculty;
