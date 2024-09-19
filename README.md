<!-- html -->
    <nav>
        <div class="menu">menu</div>
        <ul class="menu-items none">
          <li>item 1</li>
          <li>item 2</li>
          <li>item 3</li>
        </ul>
      </nav>
    <script type="module" src="main.js"></script> 

<!-- css -->
ul{
  list-style: none;
}

.menu{
position: relative;
cursor: pointer;
}

.menu:hover{
  color:gray;
}

.menu-items{
  position: absolute;
  /* margin-left: -40px; */
  margin-top: 5px;
  background-color: #797777;
  padding: 8px;
  color: white;
  border: 1px solid #777676;
  border-radius: 8px;
}

.none{
  display: none;
}

.inline-block{
  display: inline-block;
}

