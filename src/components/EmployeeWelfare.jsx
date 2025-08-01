import logo from "../assets/bluedart-logo.jpg";
import ewsLogo from "../assets/ews-logo.jpg";

const EmployeeWelfare = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        {/* Step 1: Logo */}
        <section className="mb-12 border-b pb-6">
          <div className="flex items-center justify-center gap-6 flex-wrap mb-6">
            <img
              src={logo}
              alt="Blue Dart Aviation Logo"
              className="w-28 h-auto rounded shadow-md"
            />
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-extrabold text-blue-800">
                BLUE DART
              </h1>
              <p className="text-xl text-gray-600">Aviation Limited</p>
            </div>
          </div>
          <p className="text-gray-700 text-center text-lg leading-relaxed">
            Welcome to <strong>BDA EWS</strong> (Employee Welfare Society). Our
            logo represents our mission to support and uplift our employees.
          </p>
        </section>

        {/* Step 2: Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Blue Dart Aviation Limited employee welfare society started on 2009
            for financial support to BDA employee's, who are all joined in BDA
            as a permanent employee's they are all BDAEWS members, we have
            registered society with sub registered office (SRO), Tambaram, every
            year we use to do auditing of BDAEWS account and ITR filing with
            income tax department, we have conducting AGM meeting every year
            with all members to discuss for agenda.
          </p>
        </section>

        {/* Step 3: Importance */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            Importance of Employee Welfare
          </h2>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img
              src={ewsLogo}
              alt="Employee Welfare Society Logo"
              className="w-24 h-auto rounded shadow"
            />
            <p className="text-gray-700 max-w-xl text-lg leading-relaxed">
              Employee welfare plays a crucial role in improving morale,
              reducing stress, and increasing productivity by offering health,
              financial, and emotional support.
            </p>
          </div>
        </section>

        {/* Step 4: Authorized Personnel */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            Authorized Personnel
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            The society is managed by authorized personnel including the{" "}
            <strong>Director, President</strong>, and <strong>Secretary</strong>
            , who oversee all operations and approvals.
          </p>
        </section>

        {/* Step 5: Loan Application */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            Loan Application
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Employees can apply for loans through the society under certain
            eligibility criteria. Loan applications will be reviewed by the
            authorized personnel.
          </p>
          <a
            href="https://forms.gle/your-google-form-link" // Replace with real link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-blue-600 text-white px-6 py-2 text-lg rounded shadow hover:bg-blue-700 transition-colors"
          >
            Apply for Loan
          </a>
        </section>
      </div>
    </div>
  );
};

export default EmployeeWelfare;
