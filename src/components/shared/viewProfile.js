import React from "react";
import "../../css/components/shared/viewProfile.css";

function ViewProfile() {
  return (
    <section className="view-profile-container">
      <section className="view-profile-header">
        <section className="vph-profile">
          <div>
            <img src={"https://images.unsplash.com/photo-1600705722908-bab1e61c0b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"} width={100} />
          </div>
          <h4>Smith James</h4>
        </section>
        <section className="vph-follows">
          <div>
            <h4>10</h4>
            <h5>Posts</h5>
          </div>
          <div>
            <h4>2000</h4>
            <h5>Followers</h5>
          </div>
          <div>
            <h4>300</h4>
            <h5>Following</h5>
          </div>
        </section>
      </section>
      <section className="view-profile-posts">
        <div style={{ backgroundImage: "url(https://t4.ftcdn.net/jpg/05/51/22/65/360_F_551226555_JoynWcUCPb7U68psjX0PnNG51WF4to2E.jpg)" }}></div>
        <div style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2018/08/29/03/57/man-3639100_640.jpg)" }}></div>
        <div style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2021/05/27/18/15/motorcycle-6288958_640.jpg)" }}></div>
        <div style={{ backgroundImage: "url(https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-p-3278215.jpg&fm=jpg)" }}></div>
        <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80)" }}></div>
        <div style={{ backgroundImage: "url(https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=)" }}></div>
        <div style={{ backgroundImage: "url(https://media.istockphoto.com/id/619394616/photo/male-tourist-looking-at-flight.jpg?s=612x612&w=0&k=20&c=ceoZHqycPZAok1WV4lFnt0wUlqtM6DiHYo5OG6InLMI=)" }}></div>
        <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80)" }}></div>
        <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506424482693-1f123321fa53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW90b3JiaWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60)" }}></div>
        <div style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2018/08/29/03/57/man-3639100_640.jpg)" }}></div>
        <div style={{ backgroundImage: "url(https://cdn.pixabay.com/photo/2021/05/27/18/15/motorcycle-6288958_640.jpg)" }}></div>
        <div style={{ backgroundImage: "url(https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-oleksandr-p-3278215.jpg&fm=jpg)" }}></div>
        <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80)" }}></div>
        <div style={{ backgroundImage: "url(https://media.istockphoto.com/id/1285301614/photo/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-and-life-people-travel.jpg?s=612x612&w=0&k=20&c=0QW6GnkuFNYcPZhy26XVHuTc2avJTK8u6l_1iT0SlZk=)" }}></div>
        <div style={{ backgroundImage: "url(https://media.istockphoto.com/id/619394616/photo/male-tourist-looking-at-flight.jpg?s=612x612&w=0&k=20&c=ceoZHqycPZAok1WV4lFnt0wUlqtM6DiHYo5OG6InLMI=)" }}></div>
        <div style={{ backgroundImage: "url(https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW90b3JiaWtlfGVufDB8fDB8fHww&w=1000&q=80)" }}></div>
        
      </section>
    </section>
  );
}

export default ViewProfile;
