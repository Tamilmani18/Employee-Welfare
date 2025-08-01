import logo from "../assets/bluedart-logo.jpg";
import ewsLogo from "../assets/ews-logo.jpg";

const EmployeeWelfare = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        {/* Step 1: Logo */}
        <section className="pb-6">
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
        </section>

        {/* Step 2: Introduction */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto text-justify">
            Blue Dart Aviation Limited Employee Welfare Society started on 2009
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
            Blue Dart Aviation Employees Welfare Society
          </h2>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <img
              src={ewsLogo}
              alt="Employee Welfare Society Logo"
              className="w-24 h-auto rounded shadow"
            />
            <p className="text-gray-700 max-w-xl text-lg leading-relaxed text-justify">
              The Blue Dart Aviation Employees Welfare Society plays a vital
              role in supporting the financial well-being of permanent employees
              by offering assistance, promoting transparency, and fostering
              unity through annual meetings and structured governance.
            </p>
          </div>
        </section>

        {/* Step 4: Authorized Personnel */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            Authorized Personnel
          </h2>
          <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
            The society is managed by authorized personnel including the{" "}
            Director, President, Secretary, and Treasurer, who oversee all
            operations and approvals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-gray-500 font-medium">
            <div>
              <p>
                <strong>President</strong>
              </p>
              <p>Parameshwaran P</p>
            </div>
            <div>
              <p>
                <strong>Secretary</strong>
              </p>
              <p>N. Palaniappan</p>
            </div>
            <div>
              <p>
                <strong>Treasurer</strong>
              </p>
              <p>Sankara Narayanan</p>
            </div>
            <div>
              <p>
                <strong>Joint Secretary</strong>
              </p>
              <p>Karikalan K</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployeeWelfare;
