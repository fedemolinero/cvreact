import './Body.css';
import InfoCard from '../../shared/components/sidebar/InfoCard';
import Button from '@material-ui/core/Button';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FaceIcon from '@material-ui/icons/Face';

function Body() {

  return (
    <div className="Body">
      <div className="Body-section-left">


        <div className="photo-wrapper">
          <div className="photo">
            <FaceIcon className="FaceIconClass" />
          </div>
        </div>


        <div className="content-wrapper">
          <div className="summary-title">
            CONTACT
          </div>
          <div className="separator-left"></div>
          <div className="summary-content">
            <div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<AlternateEmailIcon />}
              >
                mymail@myprovider.com.ar
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<PersonPinCircleIcon />}
              >
                My City, Santa Fe. Argentina
              </Button>
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LinkedInIcon />}
              >
                linkedin/fedemolinero
              </Button>
            </div>

          </div>
        </div>

        <div className="content-wrapper">
          <div className="summary-title">
            SKILLS
          </div>
          <div className="separator-left"></div>
          <div className="summary-content">
            <div>
              BAR SKILLS
            </div>
            <div>
              BAR SKILLS 2
            </div>
            <div>
              BAR SKILLS 3
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="summary-title">
            LANGUAGES
          </div>
          <div className="separator-left"></div>
          <div className="summary-content">
            <div>
              SPANISH
            </div>
            <div>
              ENGLISH
            </div>
          </div>
        </div>

      </div>

      <div className="Body-section-right">

        <div className="name-title-wrapper">
          <div className="name-title">
            YOUR NAME HERE WITH CAPITAL LETTERS
          </div>
          <div className="separator"></div>
          <div className="name-subtitle">
            Subtitle if you want
          </div>
        </div>

        <div className="content-wrapper">
          <InfoCard title="SUMMARY" />
        </div>

        <div className="content-wrapper">
          <InfoCard title="EXPERIENCE" subtitle="Support Administrative" startDate="09/07/2020" endDate="10/10/2021" />
        </div>

        <div className="content-wrapper">
          <InfoCard title="EDUCATION" subtitle="University Degree" startDate="11/01/2020" endDate="20/09/2021" />
        </div>

      </div>
    </div>
  );
}

export default Body;
