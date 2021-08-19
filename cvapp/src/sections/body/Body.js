import './Body.css';
import Sidebar from './sidebar/Sidebar';

function Body() {

  const data = [
    {
      id: 1,
      title: 'Habilidad 1',
      subtitle: 'Carpinteria',
      amount: 5
    },
    {
      id: 2,
      title: 'Habilidad 2',
      subtitle: 'Programacion',
      amount: 2
    }
  ];

  return (
    <div className="Body">
      <div className="Body-section-left">
        <div className="photo-wrapper">
          <div className="photo">
          </div>
        </div>


        <div className="content-wrapper">
          <div className="summary-title">
            CONTACT
          </div>
          <div className="separator-left"></div>
          <div className="summary-content">
            <p>info@mymail</p>
            <p>City</p>
            <p>Etc</p>
            <p>LKdin</p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="summary-title">
            SKILLS
          </div>
          <div className="separator-left"></div>
          <div className="summary-content">
            <p>BAR SKILLS HERE ------+++</p>
            <p>BAR SKILLS HERE ------+++</p>
          </div>
        </div>

        <div className="content-wrapper">
          <div className="summary-title">
            LANGUAGES
          </div>
          <div className="separator-left"></div>
          <div className="summary-content">
            <p>DOTBAR HERE ------+++</p>
            <p>DOTBAR HERE ---++++++</p>
          </div>
        </div>

        {/* <Sidebar
          title={data[0].title}
          subtitle={data[0].subtitle}
        >
        </Sidebar>
        <Sidebar
          title={data[1].title}
          subtitle={data[1].subtitle}
        >
        </Sidebar> */}
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
          <div className="summary-title">
            SUMMARY
          </div>
          <div className="separator-left"></div>

          <div className="work-experience-wrapper">

            <div className="work-experience-place">
              Support Administrative
            </div>
            <div className="work-experience-time">
              9 jul 2020 - 9 ago 2021
            </div>

          </div>

          <div className="work-experience-subtitle">
            This is what i Do
          </div>

        </div>


        <div className="content-wrapper">
          <div className="summary-title">
            EXPERIENCE
          </div>
          <div className="separator-left"></div>
          <div className="summary-content">
            Text content lorem ipsum
          </div>
        </div>

        <div className="content-wrapper">
          <div className="summary-title">
            EDUCATION
          </div>
          <div className="separator-left"></div>
          <div className="summary-content">
            Text content lorem ipsum
          </div>
        </div>

      </div>
    </div>
  );
}

export default Body;
