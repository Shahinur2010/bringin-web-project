
import './App.css'
import { FaArrowLeft, FaAngleRight, FaRegEnvelope, FaEnvelopeOpenText, FaLinkedinIn, FaIdCardAlt, FaFileSignature } from 'react-icons/fa';
import { HiDocumentText } from "react-icons/hi";

const App = () => {

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mt-16 mb-20">
        <div className='flex justify-between'>
          <div>
            <FaArrowLeft />
          </div>
          <div>
            <button className='btn bg-blue-500 rounded-lg h-8 w-32'>Need Help?</button>
          </div>
        </div>
        <h2 className="text-2xl font-semibold mt-4">Recruiter Identity Verification</h2>
        <p className='pb-4'><small>Choose one of the below listed method</small></p>
        <div className="space-y-2">
          <div className='flex justify-between'>
             <div className='flex gap-3'>
             <FaRegEnvelope className='mt-2 text-blue-400'/>
            <div>
              <div className="flex items-center">
                <label className='font-medium' htmlFor="workEmail">Work Email</label>
              </div>
              <p className='pb-4'><small>Enter your work email</small></p>
            </div>
             </div>
             <FaAngleRight />
          </div>
          <div className='flex justify-between'>
              <div className='flex gap-3'>
              <FaEnvelopeOpenText className='mt-2 text-blue-400'/>
            <div>
              <div className="flex items-center">
                <label className='font-medium' htmlFor="offerLetter">Offer Letter</label>
              </div>
              <p className='pb-4'><small>Verify with your job offer letter</small></p>
            </div>
              </div>
             <FaAngleRight />
          </div>
          <div className='flex justify-between'>
              <div className='flex gap-3'>
              <FaFileSignature className='mt-2 text-blue-400'/>
            <div>
              <div className="flex items-center">
                <label className='font-medium' htmlFor="appointmentLetter">Appointment Letter</label>
              </div>
              <p className='pb-4'><small>Verify with your appointment letter</small></p>
            </div>
              </div>
             <FaAngleRight />
          </div>
          <div className='flex justify-between'>
              <div className='flex gap-3'>
              <FaIdCardAlt className='mt-2 text-blue-400'/>
            <div>
              <div className="flex items-center">
                <label className='font-medium' htmlFor="companyIdCard">Company ID Card</label>
              </div>
              <p className='pb-4'><small>Verify with your company's ID card</small></p>
            </div>
              </div>
             <FaAngleRight />
          </div>
          <div className='flex justify-between'>
              <div className='flex gap-3'>
              <FaLinkedinIn className='mt-2 text-blue-400'/>
            <div>
              <div className="flex items-center">
                <label className='font-medium' htmlFor="linkedInProfile">LinkedIn Profile</label>
              </div>
              <p className='pb-4'><small>Enter Your LinkedIn Profile Link</small></p>
            </div>
              </div>
             <FaAngleRight />
          </div>
          <div className='flex justify-between'>
              <div className='flex gap-3'>
              <HiDocumentText className='mt-2 text-blue-400'/>
            <div>
              <div className="flex items-center">
                <label className='font-medium' htmlFor="otherDocuments">Any Other Authorized Documents</label>
              </div>
              <p className='pb-4'><small>Verify with any other valid documents</small></p>
            </div>
              </div>
             <FaAngleRight />
          </div>
        </div>
      </div>
    </div>
  );
};


export default App
