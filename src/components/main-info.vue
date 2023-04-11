<template>
    <div id="about" class="main-info container">
        <div class="main-info-left-part">
            <h1 class="person-name">I am Tolya</h1>
            <div class="person-speciality small-p">
                Frontend-developer
            </div>
            <a class="default-purple-a main-info-a" href="#skills">SCROLL TO MORE</a>
        </div>
        <img class="main-image" src="../assets/images/person-img.jpg" alt="person-img">
    </div>
</template>

<script>
export default {
    name: "main-info"
}
</script>

<style scoped>
.main-info {
    display: flex;
    justify-content: space-between;
}
.main-image {
    width: 550px;
    position: absolute;
    right: 0;
    z-index: -1;
}
.main-info-left-part .person-name {
    font-size: 58px;
    color: #363940;
    font-family: "rm";
    margin: 215px 0 106px 0;
    max-width: 300px;
}
.person-speciality {
    font-size: 16px;
    color: #95A1BB;
    font-family: "rr";
    margin-bottom: 213px;
}

.default-purple-a {
    text-decoration: none;
    color: #6E38F7;
    font-size: 12px;
    font-family: "rm";
}
</style>