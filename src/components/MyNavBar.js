function MyNavBar(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="Home/">MyAutoMobile</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
        {/*         <a class="nav-link" href="/myresume">MyResume</a>*/}

        <a class="nav-link" href="/home">Home</a>
        <a class="nav-link" href="/about">About</a>
        <a class="nav-link" href="/addvehicle">AddVehicle</a>
        <a class="nav-link" href="/vehicle-list">VehicleList</a>
        <a class="nav-link" href="/update-vehicle">UpdateVehicle</a>








 
      </div>
    </div>
  </div>
</nav>




       </>



)

}
export default MyNavBar;