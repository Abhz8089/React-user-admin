import {useContext,useEffect,useState} from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEdit,
  faUpload,
  
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../context/userContext";
import axios from 'axios'
import "./StyleSheet/profile.css"
import { toast } from "react-hot-toast";


export default function PersonalProfile() {
    const {user,setUser} = useContext(UserContext);
    const [imageFile, setImageFile] = useState(null);
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImageFile(file);
        
      };



const handleUpload = () => {
  const formData = new FormData();
  formData.append("profilePicture", imageFile);
  axios
    .post("/upload-profile", formData)
    .then((res) => {
         if(res.error){toast(res.error)}else{
          toast.success(
            'Profile Picture uploaded'
          )
           const updatedUser = { ...user, image: res.data.imageUrl };
           setUser(updatedUser);
         }
    }
    )
    .catch((err) => console.log(err));
};
 useEffect(() => {
   axios
     .get("/profile")
     .then((res) => setUser(res.data))
     .catch((err) => console.log(err));
 }, []);
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="6" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: ".5rem" }}>
              <MDBRow className="g-0">
                <MDBCol
                  md="4"
                  className="gradient-custom text-center text-white"
                  style={{
                    borderTopLeftRadius: ".5rem",
                    borderBottomLeftRadius: ".5rem",
                  }}
                >
                  {user && user.image && (
                    <MDBCardImage
                      src={`http://localhost:8000/${user.image}`}
                      alt="Avatar"
                      className="my-5"
                      style={{ width: "80px" }}
                      fluid
                    />
                  )}

                  <br />
                  {imageFile ? (
                    <FontAwesomeIcon onClick={handleUpload} icon={faUpload} />
                  ) : (
                    <div className="custom-file-input">
                      <input
                        type="file"
                        name="profilePicture"
                        id="fileInput"
                        onChange={handleFileChange}
                      />
                      <label htmlFor="fileInput" className="edit-icon">
                        <FontAwesomeIcon icon={faEdit} />
                      </label>
                    </div>
                  )}
                

                  <MDBTypography tag="h5">
                    {user ? user.name : "Marie Horwitz"}
                  </MDBTypography>
                  <MDBCardText>Web Designer</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">
                          {user ? user.email : "info@example.com"}
                        </MDBCardText>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}




