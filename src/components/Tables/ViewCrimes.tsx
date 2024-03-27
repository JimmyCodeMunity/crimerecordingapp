import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { NavLink,useNavigate } from 'react-router-dom';



const ViewCrimes = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAssignClick = (crime) => {
    // Navigate to the Assign screen and pass laundryname as a query parameter
    navigate(`/Assign?selector=${encodeURIComponent(crime._id)}`);
  };
  
  // const { laundryname } = location.state;

  useEffect(() => {
    
    handleLaundries();
  }, []);

  const handleLaundries = async () => {
    setLoading(true);
    
    
    try {
      const response = await axios.get(
        'https://crime-app-backend.vercel.app/api/v2/admin/allcrimes',
      );
      setProductData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'Error fetching Orders',
      });
    }
  };
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">

        
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Crimes
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Crime Name</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Crime Description</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Location</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Action</p>
        </div>
      </div>

      {productData.map((crime, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {crime.crime}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {crime.description}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {crime.location}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {crime.status}
            </p>
          </div>
          
          <div className="col-span-1 flex items-center">
          
              <button onClick={() => handleAssignClick(crime)} className="text-sm text-meta-3">Attend to</button>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ViewCrimes;
