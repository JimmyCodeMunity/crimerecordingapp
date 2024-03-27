import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import TableThree from '../components/Tables/TableThree';
import TableTwo from '../components/Tables/Riders';
import DefaultLayout from '../layout/DefaultLayout';
// import ViewRiders from '../components/Tables/Riders';
import ViewLaundries from '../components/Tables/Laundries';
import ViewCrimes from '../components/Tables/ViewCrimes';

const Crimes = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Crimes" />

      <div className="flex flex-col gap-10">
        
        <ViewCrimes/>
        
      </div>
    </DefaultLayout>
  );
};

export default Crimes;
