import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="map">
      <pre className="ascii">
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣄⡤⣄⣄⠀⠀⠀⠄⠀⠂⠀⠂⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢤⣤⣆⣄⠠⠁⠤⠅⠀⢓⡦⡋⠁⢂⠀⠀⣈⣛⡇⠀⠄⠀⠁⠀⠀⠃⠀⠁⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⣤⣡⠋⢎⡏⠉⡯⣣⣆⠀⢈⣧⠃⠀⢀⠠⠀⠂⡂⠐⡽⣇⠀⠔⠂⠂⠄⠂⠀⢀⡁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⣸⠇⡕⡄⢐⠁⠀⠁⠅⡵⣿⣷⠟⠵⢂⠲⠐⠂⠄⠥⢲⡣⡿⣲⠧⠶⡘⢊⠋⠋⡣⠭⢷⠤⡀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⡀⠁⡉⡼⠀⠀⡂⢀⠔⡆⡙⣴⣟⠟⣧⠋⠉⠑⡉⠁⠩⠉⠃⠆⣝⡟⡁⠅⡂⡐⡖⠎⠅⠥⡃⣇⡂⡀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠄⠀⢡⢟⡀⠀⡂⡸⡅⣎⠛⠁⡍⠄⠁⠁⠈⠀⠁⠁⠈⠀⠂⡁⠀⠑⢧⡆⠈⠀⢃⠀⠈⠄⢐⣋⣣⠄⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⡁⡴⡞⣣⢿⣾⡤⣣⠋⠉⠁⠁⠃⣀⣶⠂⠀⠀⠀⢀⣤⠀⠀⠀⠂⡀⠀⠑⣅⠀⠀⡎⣗⡑⠔⢑⣗⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⢨⣬⡃⢚⠐⠀⢳⡳⡃⠡⠀⠁⠀⣴⣯⡏⠀⠀⠀⢁⣿⣿⠆⠀⠀⠠⠁⡀⠀⢘⡂⠠⠄⠂⡂⣐⡜⠁⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⡜⢐⡀⠀⢁⠀⣜⠁⠅⠁⠂⠀⢠⣿⡟⠁⠀⠀⠀⣼⡷⡏⠀⠀⠀⠈⠠⠂⠰⠶⡭⢻⡋⠶⠣⢥⠱⡁⠐⢀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⡇⠠⡠⠀⠀⠘⡚⠂⠇⠀⠁⠀⠀⠛⠁⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠅⠂⡧⠳⡏⠀⠡⠀⠃⡀⠈⠀⡆⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⡐⡅⡐⡀⠀⠀⡥⡇⢐⠀⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⢀⡆⠀⡀⠁⠄⠀⠀⠅⠑⡀⡂⢡⠀⠀⠀ <br></br>
        ⠀⠀⠀⠐⠀⣅⢈⠀⠀⠐⠄⡇⠅⢀⠀⠀⠈⡢⣀⠀⠀⠀⠀⠀⠀⢠⡆⠀⠀⠀⠀⠀⠀⡃⡫⠁⢁⡀⠀⠀⠀⠐⠀⠀⡃⡄⡰⠀⠀⠀ <br></br>
        ⠀⠀⠀⠣⡀⡑⠮⣎⡀⠐⠂⣇⡅⠀⠀⠀⠀⠈⠉⠓⠦⠤⠤⠤⠔⠋⠀⠀⠀⠀⠀⠀⠄⣂⣚⡀⡀⠄⠁⠀⠠⠀⠀⡠⣣⠋⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠈⠀⠈⠀⠋⣏⣕⣷⣧⡄⠀⠀⡀⠐⠀⠢⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢓⣧⣭⡬⡮⡧⠤⡤⠖⠚⠊⠊⠁⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠈⠂⠄⠠⠀⡇⣼⢅⠑⣆⡠⠀⠀⠀⠀⠐⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⢄⡁⡲⠃⢀⡛⡅⠁⠡⠀⠡⡀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⡇⠀⠈⠄⡏⡦⣀⠀⠀⠄⠀⠀⠀⡀⠡⠁⠀⠀⣁⣥⡓⠃⠢⡬⡁⡂⠃⠈⡨⠀⠀⢈⡄⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠅⠀⠀⠰⡂⠀⠀⡁⢗⡛⣻⠷⡦⣄⣀⣀⣀⣄⣤⡶⠫⠐⣇⢢⡅⣰⢀⢢⠡⡡⠌⠔⢂⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠈⡄⡀⢀⠀⡉⢒⡄⣤⣦⡟⢻⠀⠀⠀⠀⢀⡂⠂⠅⡀⠀⠉⣍⠞⡂⠛⠕⡉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠢⠑⡢⢆⠐⡪⡀⢀⠀⠠⣁⢚⡣⠙⠀⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⡠⠄⠤⠠⠀⠄⠀⠄⡀⠀⠀⢀⠋⠋⠛⠊⠶⣖⡾⠆⠝⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⢸⠁⠀⠀⠀⠀⠀⠀⠀⠀⠁⠢⠬⡀⠀⠀⢀⠀⡀⠄⠄⠂⠒⠐⠂⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡬⣄⡃⠈⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠑⠀⠄⢀⠀⠀⠀⠀⢈⢀⢜⠁⠀⠀⠀⠀⠀⠀⠀⡀⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠁⠁⠁⠃⡾⠄⡀⣀⡀⠠⠀⠂⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ <br></br>
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </pre>
    </div>
  );
}

export default Home;