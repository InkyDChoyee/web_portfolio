const DbServerPart = () => {
  const db = [
    { id: "oracledb_logo", src: require("../resources/img/oracledb_logo.png") },
    { id: "mysql_logo", src: require("../resources/img/mysql_logo.png") },
    { id: "mybatis_logo", src: require("../resources/img/mybatis_logo.png") },
  ];

  const server = [
    { id: "tomcat_logo", src: require("../resources/img/tomcat_logo.png") },
  ];

  return (
    <div className="db_server_part">
      <div className="db_part">
        <p>db</p>
        {db.map((img, id) => (
          <img key={id} src={img.src} />
        ))}
      </div>
      <div className="server_part">
        <p>server</p>
        {server.map((img, id) => (
          <img key={id} src={img.src} />
        ))}
      </div>
    </div>
  );
};

export default DbServerPart;
