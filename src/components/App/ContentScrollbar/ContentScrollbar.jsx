import React from "react";
import PageHeader from "../../../commonComponents/PageHeader/PageHeader";
import "./ContentScrollbar.scss";
import { Card, Col, Row } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";

const ContentScrollbar = () => {
  return (
    <React.Fragment>
      <div>
        <PageHeader
          titles="Content Scroll Bar"
          active="Content Scroll Bar"
          items={["Apps"]}
        />

        {/* <!-- ROW-1 OPEN --> */}
        <Row>
          <Col sm={12} md={12} lg={12} xl={12}>
            <Card>
              <Card.Header>
                <Card.Title>Default-scroll</Card.Title>
              </Card.Header>

              <Card.Body className="scroll">
                {/* <!-- content --> */}
                <PerfectScrollbar>
                  <div className="content vscroll h-300">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum
                    </p>
                    <p>
                      you need to be sure there isn't anything embarrassing
                      hidden in the middle of text. All the Lorem Ipsum
                      generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc
                    </p>
                    <p>
                      omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur,
                    </p>
                    <p>
                      adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam quaerat
                      voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur
                    </p>
                    <p>
                      explain to you how all this mistaken idea of denouncing
                      pleasure and praising pain was born and I will give you a
                      complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure
                    </p>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum
                    </p>
                    <p>
                      you need to be sure there isn't anything embarrassing
                      hidden in the middle of text. All the Lorem Ipsum
                      generators on the Internet tend to repeat predefined
                      chunks as necessary, making this the first true generator
                      on the Internet. It uses a dictionary of over 200 Latin
                      words, combined with a handful of model sentence
                      structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc
                    </p>
                    <p>
                      omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur,
                    </p>
                    <p>
                      adipisci velit, sed quia non numquam eius modi tempora
                      incidunt ut labore et dolore magnam aliquam quaerat
                      voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur
                    </p>
                    <p>
                      explain to you how all this mistaken idea of denouncing
                      pleasure and praising pain was born and I will give you a
                      complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure
                    </p>
                  </div>
                </PerfectScrollbar>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={12} lg={12} xl={12}>
            <Card>
              <Card.Header>
                <Card.Title>Minimal-scroll</Card.Title>
              </Card.Header>
              <Card.Body className="scroll">
                {/* <!-- content --> */}
                <PerfectScrollbar>
                  <div className="content-1 vscroll h-300">
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga. Et harum quidem rerum facilis est et
                      expedita distinctio. Nam libero tempore, cum soluta nobis
                      est eligendi optio cumque nihil impedit quo minus id quod
                      maxime placeat facere possimus, omnis voluptas assumenda
                      est, omnis dolor repellendus. Temporibus autem quibusdam
                      et aut officiis debitis aut rerum necessitatibus saepe
                      eveniet ut et voluptates repudiandae sint et molestiae non
                      recusandae. Itaque earum rerum hic tenetur a sapiente
                      delectus, ut aut reiciendis voluptatibus maiores alias
                      consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                    <p>
                      On the other hand, we denounce with righteous indignation
                      and dislike men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by desire,
                      that they cannot foresee the pain and trouble that are
                      bound to ensue; and equal blame belongs to those who fail
                      in their duty through weakness of will, which is the same
                      as saying through shrinking from toil and pain. These
                      cases are perfectly simple and easy to distinguish. In a
                      free hour, when our power of choice is untrammelled and
                      when nothing prevents our being able to do what we like
                      best, every pleasure is to be welcomed and every pain
                      avoided. But in certain circumstances and owing to the
                      claims of duty or the obligations of business it will
                      frequently occur that pleasures have to be repudiated and
                      annoyances accepted. The wise man therefore always holds
                      in these matters to this principle of selection: he
                      rejects pleasures to secure other greater pleasures, or
                      else he endures pains to avoid worse pains.
                    </p>
                    <p>
                      omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur,
                    </p>
                    <p>
                      aThere are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </p>
                    <p>
                      explain to you how all this mistaken idea of denouncing
                      pleasure and praising pain was born and I will give you a
                      complete account of the system, and expound the actual
                      teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                      consectetur, adipisci velit, sed quia non numquam eius
                      modi tempora incidunt ut labore et dolore magnam aliquam
                      quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                      exercitationem ullam corporis suscipit laboriosam, nisi ut
                      aliquid ex ea commodi consequatur? Quis autem vel eum iure
                      reprehenderit qui in ea voluptate velit esse quam nihil
                      molestiae consequatur, vel illum qui dolorem eum fugiat
                      quo voluptas nulla pariatur
                    </p>
                    <p>
                      omnis iste natus error sit voluptatem accusantium
                      doloremque laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                      quia voluptas sit aspernatur aut odit aut fugit, sed quia
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Neque porro quisquam est, qui dolorem
                      ipsum quia dolor sit amet, consectetur,
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved over the years, sometimes by
                      accident, sometimes on purpose (injected humour and the
                      like)
                    </p>
                  </div>
                </PerfectScrollbar>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* <!-- ROW-1 CLOSED --> */}
      </div>
    </React.Fragment>
  );
};

export default ContentScrollbar;
