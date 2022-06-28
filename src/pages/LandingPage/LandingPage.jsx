import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import InfoMovie from "../../components/InfoMovie";

LandingPage.propTypes = {};

function LandingPage(props) {
  return (
    <>
      <div className="main">
        <InfoMovie />
      </div>
      <div className="content-des">
        <section className="content-des-title">Nội dung phim</section>
        <section className="content-des-summary">
          America Chavez và một phiên bản của Bác sĩ Stephen Strange bị truy
          đuổi bởi một con quỷ trong không gian giữa các vũ trụ khi đang tìm
          Cuốn sách Vishanti. Khi Strange bị giết đã khiến Chavez vô tình tạo ra
          một cánh cổng dịch chuyển khiến cô và xác của Strange bị dịch chuyển
          đến Earth-616, nơi phiên bản Strange của vũ trụ chính giải cứu Chavez
          khỏi một con quỷ bạch tuộc với sự giúp đỡ từ Phù thủy tối thượng Wong.
          Chavez giải thích lý do những con quỷ săn lùng cô là vì cô có sức mạnh
          để du hành xuyên đa vũ trụ. Nhận ra chữ phép thuật trên người con quỷ,
          Strange đã đến nhờ Wanda Maximoff giúp đỡ, chỉ để nhận ra rằng cô
          chính là người chịu trách nhiệm cho các cuộc tấn công đó. Kể từ khi có
          được cuốn sách Darkhold và trở thành Scarlet Witch, Wanda tin rằng
          việc kiểm soát đa vũ trụ bằng sức mạnh của Chavez sẽ cho phép cô đoàn
          tụ với Billy và Tommy, những đứa trẻ được cô tạo ra bằng phép thuật
          trong thời gian ở Westview. Khi Strange từ chối đầu hàng và giao nộp
          Chavez, Wanda tấn công Kamar-Taj, sát hại nhiều phù thủy. Chavez vô
          tình dịch chuyển bản thân và Strange qua đa vũ trụ từ Earth-616 đến
          Earth-838. Wanda sử dụng Darkhold để "mộng du", nắm quyền kiểm soát cơ
          thể một phiên bản khác của cô ấy ở Earth-838, người đang sống một cuộc
          sống tự do với Billy và Tommy của cô ấy. Một phù thủy sống sót sau
          cuộc tấn công của Wanda đã hy sinh bản thân để tiêu diệt cuốn sách
          Darkhold và phá vỡ mộng du. Sau đó Wanda ép Wong dẫn cô đến núi
          Wundagore, một tàn tích cổ bị cấm, nơi sinh ra Darkhold để có thể tiếp
          tục sử dụng mộng du. Trong khi tìm kiếm sự giúp đỡ, Phù thủy tối
          thượng của Earth-838, Karl Mordo đã bắt được Strange và Chavez, đưa ra
          trước hội Illuminati, một hội kín bao gồm Mordo, Đại úy Peggy Carter,
          Vua Blackagar Boltagon, Đại úy Maria Rambeau, Tiến sĩ Reed Richards,
          và Giáo sư Charles Xavier. Họ cho rằng Strange của mọi vũ trụ đều là
          một mối nguy với vũ trụ của họ vì trong nỗ lực đánh bại Thanos,
          Strange của Earth-838 đã liều lĩnh sử dụng cuốn sách Darkhold, việc sử
          dụng cuốn sách không giúp đánh bại Thanos mà đã vô tình đã gây ra một
          cuộc "xâm lấn" giữa các vũ trụ dẫn đến một vũ trụ đã bị hủy diệt. hội
          Illuminati quyết định giết Strange của Earth-838 để ngăn anh ta gây
          thêm tổn hại và Mordo tin rằng Strange của Earth-616 cũng nguy hiểm
          tương tự. Trước khi họ có thể đưa ra phán quyết, Wanda thiết lập lại
          mộng du của mình bằng cách sử dụng sức mạnh tại Núi Wundagore và nhập
          vào cơ thể một phiên bản khác của cô ấy ở Earth-838. Cô giết tất cả
          các thành viên Illuminati ngoại trừ Mordo. Strange và Chavez trốn
          thoát với sự giúp đỡ từ hôn phu cũ Christine Palmer của Strange ở
          Earth-838, một nhà khoa học làm việc với Illuminati. Strange, Chavez
          và Palmer bước vào không gian giữa các vũ trụ để tìm Cuốn sách
          Vishanti, thứ chống lại sức mạnh của Darkhold nhưng Wanda xuất hiện và
          phá hủy trang sách cần thiết để chống lại sức mạnh của cô. Sau đó,
          Wanda bắt và chiếm lấy tâm trí của Chavez, sử dụng sức mạnh của cô để
          đưa những người khác đến một vũ trụ đang ở bên bờ vực hủy diệt. Trở
          lại Earth-616, Wanda bắt đầu câu thần chú để lấy sức mạnh của Chavez.
          Strange đánh bại Sinister Strange, kẻ đã bị biến chất bởi Darkhold
          trong vũ trụ của anh ta, và sau đó sử dụng Darkhold ở vụ trụ này để
          mộng du vào xác chết của Defender Strange, người đã đi cùng Chavez
          trước đó. Với sự giúp đỡ của Wong, Strange cứu Chavez khỏi Wanda và
          sau đó khích lệ Chavez tin tưởng vào khả năng của mình; Chavez đưa
          Wanda đến Earth-838, nơi cô thấy Billy và Tommy đang giật mình vừa sợ
          hãi vừa van khóc đòi mẹ ruột của chúng. Wanda mủi lòng và sử dụng sức
          mạnh của mình để phá hủy Núi Wundagore, phá hủy tất cả các bản sao của
          Darkhold trên khắp đa vũ trụ và dường như hy sinh bản thân trong quá
          trình này. Trước khi Palmer quay trở lại Earth-838, Strange nói với cô
          rằng anh vẫn yêu Palmer trong mọi vũ trụ. Một thời gian sau, thiệt hại
          mà Wanda gây ra cho Kamar-Taj được sửa chữa khi các phù thủy sống sót
          tiếp tục đào tạo các thế hệ mới, với sự tham gia của Chavez. Strange
          khai phá sức mạnh con mắt thứ ba do sử dụng Darkhold. Trong cảnh
          mid-credit, Strange được tiếp cận bởi một phù thủy, người đã cảnh báo
          anh rằng hành động của anh đã gây ra một sự xâm lấn mà anh phải giúp
          sửa chữa. Strange theo chân cô ấy vào Dark Dimension. Và trong
          post-credit là cảnh một bán hàng của một quầy bán đồ ăn ở Earth-838 có
          tên là Pizza Poppa được giải thoát khỏi phép thuật.
        </section>
        <div className="content-des-title">Trailer</div>
        <div className="trailer">
          <ReactPlayer
            className="trailer"
            url="https://www.youtube.com/watch?v=aWzlQ2N6qqg&feature=emb_title&ab_channel=MarvelEntertainment"
            controls="true"
          />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
