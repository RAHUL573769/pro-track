import React from "react";

const Meetings = () => {
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>1</th>
              <td>Rahul Rudra</td>
              <td>Developer</td>
              <td>Blue</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr class="active">
              <th>2</th>
              <td>Debhashis Bhai</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* <!-- row 3 --> */}
            <tr>
              <th>3</th>
              <td>Koushik Bhai</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Meetings;
