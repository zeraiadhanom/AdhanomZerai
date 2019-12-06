import React, { Component } from 'react';
import './publication.css';
import RadioStation from '../images/RadioStation.jpg';

class Publications extends Component {
  render() {
    return (
      <div className="projects">
        <h2>Publications</h2>
        <section className="pub_detail">
          <div className="pub_image">
            <a
              className="img-parent"
              href=" https://mysterious-brook-32861.herokuapp.com"
              target="_blank "
              rel="noopener noreferrer"
            >
              <img alt="ActivTracker" src={RadioStation} className="" />
            </a>
            <div className="pub_content">
              <p className="Author">Author Adhanom, Zerai Araia.</p>
              <p className="Title">
                Title: Advertising, community radio and mandate : a case study
                of Radio Maritzburg in KwaZulu-Natal.
              </p>
              <p>Publication Date 2004</p>
              <p>University/Publisher University of KwaZulu-Natal</p>

              <p className="abstract">Abstract</p>
              <p>
                In South Africa, community radio is a growing phenomenon and
                over 100 radio stations have been licensed since the
                establishment of the Independent Broadcasting Authority. Ever
                since their emergence, their number has been growing
                dramatically and they have managed to attract 10% of the radio
                listenership in the country (NCRF charter). The proliferation
                and increasing demand for community radio broadcasting in South
                Africa and elsewhere demonstrates their significance and
                contribution to the socio-economic and cultural development of
                society in general, and to communities in particular.
                Nonetheless, despite their substantial contribution, communjty
                radios face challenges, especially with regard to resources and
                finance. As non-profit making institutions, they are funded by
                donors and subscribers and thus often suffer due to lack of
                reliable financial resources. The South African National
                Community Radio Forum (NCRF) states the decline of donor support
                as the main bottleneck to the proper functioning of community
                radio stations in the country (NCRF: July 2002). Thus, as with
                other commercial and public broadcasting stations, community
                radios in South Africa are expected to incorporate advertising
                as a source of income to cover some of their expenses without
                becoming dominated by profit motives. This study takes Radio
                Maritzburg in KwaZulu-Natal as a case study and attempts to
                explore the main financial sources of the station and its
                management. As its main. objective, the research in particular
                assesses the contribution of advertising as a financial source
                to the radio station and the way the station attracts
                advertisements without jeopardizing its mandate.
              </p>
              <div>
                {' '}
                <a href="http://researchspace.ukzn.ac.za/xmlui/handle/10413/3179">
                  <button className="source">Click for full publication</button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Publications;
