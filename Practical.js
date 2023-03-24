//top section 1

// navigation list assings
let acedemics = document.querySelector("#navAcedemics");
let addmission = document.querySelector("#addmision");
let athletics = document.querySelector("#athletics");
let research = document.querySelector("#reserch");
let life = document.querySelector("#life");
let about = document.querySelector("#about");
let pennCovid = document.querySelector("#pennCovid");
let secondSection = document.querySelector("#secondSection");
let nav = document.querySelector("#nav");

// navigation list array
let navElementArray1 = [addmission, athletics, research, life, about, pennCovid, secondSection, nav];
let navElementArray2 = [acedemics, addmission, athletics, life, about, pennCovid, secondSection, nav];
let navElementArray3 = [acedemics, addmission, athletics, research, about, pennCovid, secondSection];
let navElementArray4 = [acedemics, addmission, athletics, research, life, pennCovid, secondSection];


// sub-list assigns
let aboutSubList = document.querySelector("#aboutsublist");
let lifeAtpen = document.querySelector("#lifeatpen");
let researchAndInnovations = document.querySelector("#researchAndInnovation");
let acedemicSublists = document.querySelector("#acedemicSublist");

// about sublist appear and dessaper
function aboutApper() {
    aboutSubList.style.display = "block";
}
function aboutDessapear() {
    aboutSubList.style.display = "none";
}

// acedemic sublist appear and dessaper
function acedemicApper() {
    acedemicSublists.style.display = "block";
}
function acedemicdesapper() {
    acedemicSublists.style.display = "none";
}

// research sublist appear and dessaper
function researchApper() {
    researchAndInnovations.style.display = "block";
}
function researchDessapear() {
    researchAndInnovations.style.display = "none";
}

// lifeatenn sublist appear and dessaper
function lifepennApper() {
    lifeAtpen.style.display = "block";
}
function lifepennDessapear() {
    lifeAtpen.style.display = "none";
}

// leavetfor acedemics
navElementArray1.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        acedemicSublists.style.display = "none";
    });
});
// leavetfor research
navElementArray2.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        researchAndInnovations.style.display = "none";
    });
});


// leavetfor life
navElementArray3.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        lifeAtpen.style.display = "none";
    });
});


// leaver for about
navElementArray4.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        aboutSubList.style.display = "none";
    });
});


function imageAppear() {
    let imgSet1 = document.getElementById("NewsTopics");


    //news section -featured
    let featureImage = document.getElementById("feturedImages");
    if (imgSet1.value == "Featured") {
        featureImage.style.display = "block";


    } else {
        featureImage.style.display = "none";
    }
    //news section - arts and humanities
    let artsAndHumanities = document.getElementById("artAndHumanitiesImages");
    if (imgSet1.value == "Arts") {
        artsAndHumanities.style.display = "block";
    } else {
        artsAndHumanities.style.display = "none";
    }
    //news section - campus and comunity
    let campusAndCommunity = document.getElementById("campusAndCommunity");
    if (imgSet1.value == "CampusCommunity") {
        campusAndCommunity.style.display = "block";
    } else {
        campusAndCommunity.style.display = "none";
    }

    //news section - Educaton and business
    let educationBusiness = document.getElementById("educationBusiness");
    if (imgSet1.value == "EducationBusiness") {
        educationBusiness.style.display = "block";
    } else {
        educationBusiness.style.display = "none";
    }

    //news section - Health and Science
    let healthAndSciences = document.getElementById("healthAndSciences");
    if (imgSet1.value == "healthSciences") {
        healthAndSciences.style.display = "block";
    } else {
        healthAndSciences.style.display = "none";
    }

    //news section - science and technology
    let scienceAndTechnology = document.getElementById("scienceAndTechnology");
    if (imgSet1.value == "ScienceTechnology") {
        scienceAndTechnology.style.display = "block";
    } else {
        scienceAndTechnology.style.display = "none";
    }

}


//news section image set 1 image1 zoom in and out
let fetureImage1 = document.getElementById("featuredImage1");
function fetureImage1In() {
    fetureImage1.style.transition = "0.2s ease-in-out";
    fetureImage1.style.transform = "scale(1.03)";
}

function fetureImage1Out() {
    fetureImage1.style.transition = "0.1s ease-in-out";
    fetureImage1.style.transform = "scale(1)";
}

let fetureImageTexts = document.getElementById("featureImage1Text");
fetureImageTexts.addEventListener("mouseover", fetureImage1In);
fetureImageTexts.addEventListener("mouseleave", fetureImage1Out);

let imageSelect1 = document.getElementById("image1");
imageSelect1.addEventListener("mouseover", fetureImage1In);
imageSelect1.addEventListener("mouseleave", fetureImage1Out);



//news section image set 2 image1 zoom in and out
let fetureImage2 = document.getElementById("featuredImage2");
function fetureImage2In() {
    fetureImage2.style.transition = "0.2s ease-in-out";
    fetureImage2.style.transform = "scale(1.03)";
}

function fetureImage2Out() {
    fetureImage2.style.transition = "0.1s ease-in-out";
    fetureImage2.style.transform = "scale(1)";
}

let fetureImage2Texts = document.getElementById("featureImage2Text");
fetureImage2Texts.addEventListener("mouseover", fetureImage2In);
fetureImage2Texts.addEventListener("mouseleave", fetureImage2Out);

let imageSelect2 = document.getElementById("image2");
imageSelect2.addEventListener("mouseover", fetureImage2In);
imageSelect2.addEventListener("mouseleave", fetureImage2Out);




//news section image set 2 image2 zoom in and out
let fetureImage3 = document.getElementById("featuredImage3");
function fetureImage3In() {
    fetureImage3.style.transition = "0.2s ease-in-out";
    fetureImage3.style.transform = "scale(1.03)";
}

function fetureImage3Out() {
    fetureImage3.style.transition = "0.1s ease-in-out";
    fetureImage3.style.transform = "scale(1)";
}

let fetureImage3Texts = document.getElementById("featureImage3Text");
fetureImage3Texts.addEventListener("mouseover", fetureImage3In);
fetureImage3Texts.addEventListener("mouseleave", fetureImage3Out);

let imageSelect3 = document.getElementById("image3");
imageSelect3.addEventListener("mouseover", fetureImage3In);
imageSelect3.addEventListener("mouseleave", fetureImage3Out);


//news section image set 3 image1 zoom in and out
let fetureImage4 = document.getElementById("featuredImage4");
function fetureImage4In() {
    fetureImage4.style.transition = "0.2s ease-in-out";
    fetureImage4.style.transform = "scale(1.03)";
}

function fetureImage4Out() {
    fetureImage4.style.transition = "0.1s ease-in-out";
    fetureImage4.style.transform = "scale(1)";
}

let fetureImage4Texts = document.getElementById("featureImage4Text");
fetureImage4Texts.addEventListener("mouseover", fetureImage4In);
fetureImage4Texts.addEventListener("mouseleave", fetureImage4Out);

let imageSelect4 = document.getElementById("image4");
imageSelect4.addEventListener("mouseover", fetureImage4In);
imageSelect4.addEventListener("mouseleave", fetureImage4Out);

//news section image set 3 image2 zoom in and out
let fetureImage5 = document.getElementById("featuredImage5");
function fetureImage5In() {
    fetureImage5.style.transition = "0.2s ease-in-out";
    fetureImage5.style.transform = "scale(1.03)";
}

function fetureImage5Out() {
    fetureImage5.style.transition = "0.1s ease-in-out";
    fetureImage5.style.transform = "scale(1)";
}

let fetureImage5Texts = document.getElementById("featureImage5Text");
fetureImage5Texts.addEventListener("mouseover", fetureImage5In);
fetureImage5Texts.addEventListener("mouseleave", fetureImage5Out);

let imageSelect5 = document.getElementById("image5");
imageSelect5.addEventListener("mouseover", fetureImage5In);
imageSelect5.addEventListener("mouseleave", fetureImage5Out);

//news section image set 4 image1 zoom in and out
let fetureImage6 = document.getElementById("featuredImage6");
function fetureImage6In() {
    fetureImage6.style.transition = "0.2s ease-in-out";
    fetureImage6.style.transform = "scale(1.03)";
}

function fetureImage6Out() {
    fetureImage6.style.transition = "0.1s ease-in-out";
    fetureImage6.style.transform = "scale(1)";
}

let fetureImage6Texts = document.getElementById("featureImage6Text");
fetureImage6Texts.addEventListener("mouseover", fetureImage6In);
fetureImage6Texts.addEventListener("mouseleave", fetureImage6Out);

let imageSelect6 = document.getElementById("image6");
imageSelect6.addEventListener("mouseover", fetureImage6In);
imageSelect6.addEventListener("mouseleave", fetureImage6Out);

//news section image set 4 image2 zoom in and out
let fetureImage7 = document.getElementById("featuredImage7");
function fetureImage7In() {
    fetureImage7.style.transition = "0.2s ease-in-out";
    fetureImage7.style.transform = "scale(1.03)";
}

function fetureImage7Out() {
    fetureImage7.style.transition = "0.1s ease-in-out";
    fetureImage7.style.transform = "scale(1)";
}

let fetureImage7Texts = document.getElementById("featureImage7Text");
fetureImage7Texts.addEventListener("mouseover", fetureImage7In);
fetureImage7Texts.addEventListener("mouseleave", fetureImage7Out);

let imageSelect7 = document.getElementById("image7");
imageSelect7.addEventListener("mouseover", fetureImage7In);
imageSelect7.addEventListener("mouseleave", fetureImage7Out);

//news section image set 5 image1 zoom in and out
let fetureImage8 = document.getElementById("featuredImage8");
function fetureImage8In() {
    fetureImage8.style.transition = "0.2s ease-in-out";
    fetureImage8.style.transform = "scale(1.03)";
}

function fetureImage8Out() {
    fetureImage8.style.transition = "0.1s ease-in-out";
    fetureImage8.style.transform = "scale(1)";
}

let fetureImage8Texts = document.getElementById("featureImage8Text");
fetureImage8Texts.addEventListener("mouseover", fetureImage8In);
fetureImage8Texts.addEventListener("mouseleave", fetureImage8Out);

let imageSelect8 = document.getElementById("image8");
imageSelect8.addEventListener("mouseover", fetureImage8In);
imageSelect8.addEventListener("mouseleave", fetureImage8Out);


//news section image set 5 image2 zoom in and out
let fetureImage9 = document.getElementById("featuredImage9");
function fetureImage9In() {
    fetureImage9.style.transition = "0.2s ease-in-out";
    fetureImage9.style.transform = "scale(1.03)";
}

function fetureImage9Out() {
    fetureImage9.style.transition = "0.1s ease-in-out";
    fetureImage9.style.transform = "scale(1)";
}

let fetureImage9Texts = document.getElementById("featureImage9Text");
fetureImage9Texts.addEventListener("mouseover", fetureImage9In);
fetureImage9Texts.addEventListener("mouseleave", fetureImage9Out);

let imageSelect9 = document.getElementById("image9");
imageSelect9.addEventListener("mouseover", fetureImage9In);
imageSelect9.addEventListener("mouseleave", fetureImage9Out);

//news section image set 6 image1 zoom in and out
let fetureImage10 = document.getElementById("featuredImage10");
function fetureImage10In() {
    fetureImage10.style.transition = "0.2s ease-in-out";
    fetureImage10.style.transform = "scale(1.03)";
}

function fetureImage10Out() {
    fetureImage10.style.transition = "0.1s ease-in-out";
    fetureImage10.style.transform = "scale(1)";
}

let fetureImage10Texts = document.getElementById("featureImage10Text");
fetureImage10Texts.addEventListener("mouseover", fetureImage10In);
fetureImage10Texts.addEventListener("mouseleave", fetureImage10Out);

let imageSelect10 = document.getElementById("image10");
imageSelect10.addEventListener("mouseover", fetureImage10In);
imageSelect10.addEventListener("mouseleave", fetureImage10Out);

//news section image set 6 image2 zoom in and out
let fetureImage11 = document.getElementById("featuredImage11");
function fetureImage11In() {
    fetureImage11.style.transition = "0.2s ease-in-out";
    fetureImage11.style.transform = "scale(1.03)";
}

function fetureImage11Out() {
    fetureImage11.style.transition = "0.1s ease-in-out";
    fetureImage11.style.transform = "scale(1)";
}

let fetureImage11Texts = document.getElementById("featureImage11Text");
fetureImage11Texts.addEventListener("mouseover", fetureImage11In);
fetureImage11Texts.addEventListener("mouseleave", fetureImage11Out);

let imageSelect11 = document.getElementById("image11");
imageSelect11.addEventListener("mouseover", fetureImage11In);
imageSelect11.addEventListener("mouseleave", fetureImage11Out);

//news section image set 7 image1 zoom in and out
let fetureImage12 = document.getElementById("featuredImage12");
function fetureImage12In() {
    fetureImage12.style.transition = "0.2s ease-in-out";
    fetureImage12.style.transform = "scale(1.03)";
}

function fetureImage12Out() {
    fetureImage12.style.transition = "0.1s ease-in-out";
    fetureImage12.style.transform = "scale(1)";
}

let fetureImage12Texts = document.getElementById("featureImage12Text");
fetureImage12Texts.addEventListener("mouseover", fetureImage12In);
fetureImage12Texts.addEventListener("mouseleave", fetureImage12Out);

let imageSelect12 = document.getElementById("image12");
imageSelect12.addEventListener("mouseover", fetureImage12In);
imageSelect12.addEventListener("mouseleave", fetureImage12Out);

//news section image set 7 image2 zoom in and out
let fetureImage13 = document.getElementById("featuredImage13");
function fetureImage13In() {
    fetureImage13.style.transition = "0.2s ease-in-out";
    fetureImage13.style.transform = "scale(1.03)";
}

function fetureImage13Out() {
    fetureImage13.style.transition = "0.1s ease-in-out";
    fetureImage13.style.transform = "scale(1)";
}

let fetureImage13Texts = document.getElementById("featureImage13Text");
fetureImage13Texts.addEventListener("mouseover", fetureImage13In);
fetureImage13Texts.addEventListener("mouseleave", fetureImage13Out);

let imageSelect13 = document.getElementById("image13");
imageSelect13.addEventListener("mouseover", fetureImage13In);
imageSelect13.addEventListener("mouseleave", fetureImage13Out);

//news section image set 8 image1 zoom in and out
let fetureImage14 = document.getElementById("featuredImage14");
function fetureImage14In() {
    fetureImage14.style.transition = "0.2s ease-in-out";
    fetureImage14.style.transform = "scale(1.03)";
}

function fetureImage14Out() {
    fetureImage14.style.transition = "0.1s ease-in-out";
    fetureImage14.style.transform = "scale(1)";
}

let fetureImage14Texts = document.getElementById("featureImage14Text");
fetureImage14Texts.addEventListener("mouseover", fetureImage14In);
fetureImage14Texts.addEventListener("mouseleave", fetureImage14Out);

let imageSelect14 = document.getElementById("image14");
imageSelect14.addEventListener("mouseover", fetureImage14In);
imageSelect14.addEventListener("mouseleave", fetureImage14Out);

//news section image set 8 image2 zoom in and out
let fetureImage15 = document.getElementById("featuredImage15");
function fetureImage15In() {
    fetureImage15.style.transition = "0.2s ease-in-out";
    fetureImage15.style.transform = "scale(1.03)";
}

function fetureImage15Out() {
    fetureImage15.style.transition = "0.1s ease-in-out";
    fetureImage15.style.transform = "scale(1)";
}

let fetureImage15Texts = document.getElementById("featureImage15Text");
fetureImage15Texts.addEventListener("mouseover", fetureImage15In);
fetureImage15Texts.addEventListener("mouseleave", fetureImage15Out);

let imageSelect15 = document.getElementById("image15");
imageSelect15.addEventListener("mouseover", fetureImage15In);
imageSelect15.addEventListener("mouseleave", fetureImage15Out);

//news section image set 9 image1 zoom in and out
let fetureImage16 = document.getElementById("featuredImage16");
function fetureImage16In() {
    fetureImage16.style.transition = "0.2s ease-in-out";
    fetureImage16.style.transform = "scale(1.03)";
}

function fetureImage16Out() {
    fetureImage16.style.transition = "0.1s ease-in-out";
    fetureImage16.style.transform = "scale(1)";
}

let fetureImage16Texts = document.getElementById("featureImage16Text");
fetureImage16Texts.addEventListener("mouseover", fetureImage16In);
fetureImage16Texts.addEventListener("mouseleave", fetureImage16Out);

let imageSelect16 = document.getElementById("image16");
imageSelect16.addEventListener("mouseover", fetureImage16In);
imageSelect16.addEventListener("mouseleave", fetureImage16Out);

//news section image set 9 image2 zoom in and out
let fetureImage17 = document.getElementById("featuredImage17");
function fetureImage17In() {
    fetureImage17.style.transition = "0.2s ease-in-out";
    fetureImage17.style.transform = "scale(1.03)";
}

function fetureImage17Out() {
    fetureImage17.style.transition = "0.1s ease-in-out";
    fetureImage17.style.transform = "scale(1)";
}

let fetureImage17Texts = document.getElementById("featureImage17Text");
fetureImage17Texts.addEventListener("mouseover", fetureImage17In);
fetureImage17Texts.addEventListener("mouseleave", fetureImage17Out);

let imageSelect17 = document.getElementById("image17");
imageSelect17.addEventListener("mouseover", fetureImage17In);
imageSelect17.addEventListener("mouseleave", fetureImage17Out);

//news section image set 10 image1 zoom in and out
let fetureImage18 = document.getElementById("featuredImage18");
function fetureImage18In() {
    fetureImage18.style.transition = "0.2s ease-in-out";
    fetureImage18.style.transform = "scale(1.03)";
}

function fetureImage18Out() {
    fetureImage18.style.transition = "0.1s ease-in-out";
    fetureImage18.style.transform = "scale(1)";
}

let featureImage18Text = document.getElementById("featureImage18Text");
featureImage18Text.addEventListener("mouseover", fetureImage18In);
featureImage18Text.addEventListener("mouseleave", fetureImage18Out);

let imageSelect18 = document.getElementById("image18");
imageSelect18.addEventListener("mouseover", fetureImage18In);
imageSelect18.addEventListener("mouseleave", fetureImage18Out);

//news section image set 10 image2 zoom in and out
let fetureImage19 = document.getElementById("featuredImage19");
function fetureImage19In() {
    fetureImage19.style.transition = "0.2s ease-in-out";
    fetureImage19.style.transform = "scale(1.03)";
}

function fetureImage19Out() {
    fetureImage19.style.transition = "0.1s ease-in-out";
    fetureImage19.style.transform = "scale(1)";
}

let featureImage19Text = document.getElementById("featureImage19Text");
featureImage19Text.addEventListener("mouseover", fetureImage19In);
featureImage19Text.addEventListener("mouseleave", fetureImage19Out);

let imageSelect19 = document.getElementById("image19");
imageSelect19.addEventListener("mouseover", fetureImage19In);
imageSelect19.addEventListener("mouseleave", fetureImage19Out);

//news section image set 11 image1 zoom in and out
let fetureImage20 = document.getElementById("featuredImage20");
function fetureImage20In() {
    fetureImage20.style.transition = "0.2s ease-in-out";
    fetureImage20.style.transform = "scale(1.03)";
}

function fetureImage20Out() {
    fetureImage20.style.transition = "0.1s ease-in-out";
    fetureImage20.style.transform = "scale(1)";
}

let featureImage20Text = document.getElementById("featureImage20Text");
featureImage20Text.addEventListener("mouseover", fetureImage20In);
featureImage20Text.addEventListener("mouseleave", fetureImage20Out);

let imageSelect20 = document.getElementById("image20");
imageSelect20.addEventListener("mouseover", fetureImage20In);
imageSelect20.addEventListener("mouseleave", fetureImage20Out);

//news section image set 11 image2 zoom in and out
let fetureImage21 = document.getElementById("featuredImage21");
function fetureImage21In() {
    fetureImage21.style.transition = "0.2s ease-in-out";
    fetureImage21.style.transform = "scale(1.03)";
}

function fetureImage21Out() {
    fetureImage21.style.transition = "0.1s ease-in-out";
    fetureImage21.style.transform = "scale(1)";
}

let featureImage21Text = document.getElementById("featureImage21Text");
featureImage21Text.addEventListener("mouseover", fetureImage21In);
featureImage21Text.addEventListener("mouseleave", fetureImage21Out);

let imageSelect21 = document.getElementById("image21");
imageSelect21.addEventListener("mouseover", fetureImage21In);
imageSelect21.addEventListener("mouseleave", fetureImage21Out);

//news section image set 12 image1 zoom in and out
let fetureImage22 = document.getElementById("featuredImage22");
function fetureImage22In() {
    fetureImage22.style.transition = "0.2s ease-in-out";
    fetureImage22.style.transform = "scale(1.03)";
}

function fetureImage22Out() {
    fetureImage22.style.transition = "0.1s ease-in-out";
    fetureImage22.style.transform = "scale(1)";
}

let featureImage22Text = document.getElementById("featureImage22Text");
featureImage22Text.addEventListener("mouseover", fetureImage22In);
featureImage22Text.addEventListener("mouseleave", fetureImage22Out);

let imageSelect22 = document.getElementById("image22");
imageSelect22.addEventListener("mouseover", fetureImage22In);
imageSelect22.addEventListener("mouseleave", fetureImage22Out);

//news section image set 12 image2 zoom in and out
let fetureImage23 = document.getElementById("featuredImage23");
function fetureImage23In() {
    fetureImage23.style.transition = "0.2s ease-in-out";
    fetureImage23.style.transform = "scale(1.03)";
}

function fetureImage23Out() {
    fetureImage23.style.transition = "0.1s ease-in-out";
    fetureImage23.style.transform = "scale(1)";
}

let featureImage23Text = document.getElementById("featureImage23Text");
featureImage23Text.addEventListener("mouseover", fetureImage23In);
featureImage23Text.addEventListener("mouseleave", fetureImage23Out);

let imageSelect23 = document.getElementById("image23");
imageSelect23.addEventListener("mouseover", fetureImage23In);
imageSelect23.addEventListener("mouseleave", fetureImage23Out);

//news section image set 13 image1 zoom in and out
let fetureImage24 = document.getElementById("featuredImage24");
function fetureImage24In() {
    fetureImage24.style.transition = "0.2s ease-in-out";
    fetureImage24.style.transform = "scale(1.03)";
}

function fetureImage24Out() {
    fetureImage24.style.transition = "0.1s ease-in-out";
    fetureImage24.style.transform = "scale(1)";
}

let featureImage24Text = document.getElementById("featureImage24Text");
featureImage24Text.addEventListener("mouseover", fetureImage24In);
featureImage24Text.addEventListener("mouseleave", fetureImage24Out);

let imageSelect24 = document.getElementById("image24");
imageSelect24.addEventListener("mouseover", fetureImage24In);
imageSelect24.addEventListener("mouseleave", fetureImage24Out);

//news section image set 13 image2 zoom in and out
let fetureImage25 = document.getElementById("featuredImage25");
function fetureImage25In() {
    fetureImage25.style.transition = "0.2s ease-in-out";
    fetureImage25.style.transform = "scale(1.03)";
}

function fetureImage25Out() {
    fetureImage25.style.transition = "0.1s ease-in-out";
    fetureImage25.style.transform = "scale(1)";
}

let featureImage25Text = document.getElementById("featureImage25Text");
featureImage25Text.addEventListener("mouseover", fetureImage25In);
featureImage25Text.addEventListener("mouseleave", fetureImage25Out);

let imageSelect25 = document.getElementById("image25");
imageSelect25.addEventListener("mouseover", fetureImage25In);
imageSelect25.addEventListener("mouseleave", fetureImage25Out);

//news section image set 14 image1 zoom in and out
let fetureImage26 = document.getElementById("featuredImage26");
function fetureImage26In() {
    fetureImage26.style.transition = "0.2s ease-in-out";
    fetureImage26.style.transform = "scale(1.03)";
}

function fetureImage26Out() {
    fetureImage26.style.transition = "0.1s ease-in-out";
    fetureImage26.style.transform = "scale(1)";
}

let featureImage26Text = document.getElementById("featureImage26Text");
featureImage26Text.addEventListener("mouseover", fetureImage26In);
featureImage26Text.addEventListener("mouseleave", fetureImage26Out);

let imageSelect26 = document.getElementById("image26");
imageSelect26.addEventListener("mouseover", fetureImage26In);
imageSelect26.addEventListener("mouseleave", fetureImage26Out);

//news section image set 14 image2 zoom in and out
let fetureImage27 = document.getElementById("featuredImage27");
function fetureImage27In() {
    fetureImage27.style.transition = "0.2s ease-in-out";
    fetureImage27.style.transform = "scale(1.03)";
}

function fetureImage27Out() {
    fetureImage27.style.transition = "0.1s ease-in-out";
    fetureImage27.style.transform = "scale(1)";
}

let featureImage27Text = document.getElementById("featureImage27Text");
featureImage27Text.addEventListener("mouseover", fetureImage27In);
featureImage27Text.addEventListener("mouseleave", fetureImage27Out);

let imageSelect27 = document.getElementById("image27");
imageSelect27.addEventListener("mouseover", fetureImage27In);
imageSelect27.addEventListener("mouseleave", fetureImage27Out);

//news section image set 15 image1 zoom in and out
let fetureImage28 = document.getElementById("featuredImage28");
function fetureImage28In() {
    fetureImage28.style.transition = "0.2s ease-in-out";
    fetureImage28.style.transform = "scale(1.03)";
}

function fetureImage28Out() {
    fetureImage28.style.transition = "0.1s ease-in-out";
    fetureImage28.style.transform = "scale(1)";
}

let featureImage28Text = document.getElementById("featureImage28Text");
featureImage28Text.addEventListener("mouseover", fetureImage28In);
featureImage28Text.addEventListener("mouseleave", fetureImage28Out);

let imageSelect28 = document.getElementById("image28");
imageSelect28.addEventListener("mouseover", fetureImage28In);
imageSelect28.addEventListener("mouseleave", fetureImage28Out);

//news section image set 15 image2 zoom in and out
let fetureImage29 = document.getElementById("featuredImage29");
function fetureImage29In() {
    fetureImage29.style.transition = "0.2s ease-in-out";
    fetureImage29.style.transform = "scale(1.03)";
}

function fetureImage29Out() {
    fetureImage29.style.transition = "0.1s ease-in-out";
    fetureImage29.style.transform = "scale(1)";
}

let featureImage29Text = document.getElementById("featureImage29Text");
featureImage29Text.addEventListener("mouseover", fetureImage29In);
featureImage29Text.addEventListener("mouseleave", fetureImage29Out);

let imageSelect29 = document.getElementById("image29");
imageSelect29.addEventListener("mouseover", fetureImage29In);
imageSelect29.addEventListener("mouseleave", fetureImage29Out);

//news section image set 16 image1 zoom in and out
let fetureImage30 = document.getElementById("featuredImage30");
function fetureImage30In() {
    fetureImage30.style.transition = "0.2s ease-in-out";
    fetureImage30.style.transform = "scale(1.03)";
}

function fetureImage30Out() {
    fetureImage30.style.transition = "0.1s ease-in-out";
    fetureImage30.style.transform = "scale(1)";
}

let featureImage30Text = document.getElementById("featureImage30Text");
featureImage30Text.addEventListener("mouseover", fetureImage30In);
featureImage30Text.addEventListener("mouseleave", fetureImage30Out);

let imageSelect30 = document.getElementById("image30");
imageSelect30.addEventListener("mouseover", fetureImage30In);
imageSelect30.addEventListener("mouseleave", fetureImage30Out);

//news section image set 16 image2 zoom in and out
let fetureImage31 = document.getElementById("featuredImage31");
function fetureImage31In() {
    fetureImage31.style.transition = "0.2s ease-in-out";
    fetureImage31.style.transform = "scale(1.03)";
}

function fetureImage31Out() {
    fetureImage31.style.transition = "0.1s ease-in-out";
    fetureImage31.style.transform = "scale(1)";
}

let featureImage31Text = document.getElementById("featureImage31Text");
featureImage31Text.addEventListener("mouseover", fetureImage31In);
featureImage31Text.addEventListener("mouseleave", fetureImage31Out);

let imageSelect31 = document.getElementById("image31");
imageSelect31.addEventListener("mouseover", fetureImage31In);
imageSelect31.addEventListener("mouseleave", fetureImage31Out);

//news section image set 17 image1 zoom in and out
let fetureImage32 = document.getElementById("featuredImage32");
function fetureImage32In() {
    fetureImage32.style.transition = "0.2s ease-in-out";
    fetureImage32.style.transform = "scale(1.03)";
}

function fetureImage32Out() {
    fetureImage32.style.transition = "0.1s ease-in-out";
    fetureImage32.style.transform = "scale(1)";
}

let featureImage32Text = document.getElementById("featureImage32Text");
featureImage32Text.addEventListener("mouseover", fetureImage32In);
featureImage32Text.addEventListener("mouseleave", fetureImage32Out);

let imageSelect32 = document.getElementById("image32");
imageSelect32.addEventListener("mouseover", fetureImage32In);
imageSelect32.addEventListener("mouseleave", fetureImage32Out);

//news section image set 17 image2 zoom in and out
let fetureImage33 = document.getElementById("featuredImage33");
function fetureImage33In() {
    fetureImage33.style.transition = "0.2s ease-in-out";
    fetureImage33.style.transform = "scale(1.03)";
}

function fetureImage33Out() {
    fetureImage33.style.transition = "0.1s ease-in-out";
    fetureImage33.style.transform = "scale(1)";
}

let featureImage33Text = document.getElementById("featureImage33Text");
featureImage33Text.addEventListener("mouseover", fetureImage33In);
featureImage33Text.addEventListener("mouseleave", fetureImage33Out);

let imageSelect33 = document.getElementById("image33");
imageSelect33.addEventListener("mouseover", fetureImage33In);
imageSelect33.addEventListener("mouseleave", fetureImage33Out);

//news section image set 18 image1 zoom in and out
let fetureImage34 = document.getElementById("featuredImage34");
function fetureImage34In() {
    fetureImage34.style.transition = "0.2s ease-in-out";
    fetureImage34.style.transform = "scale(1.03)";
}

function fetureImage34Out() {
    fetureImage34.style.transition = "0.1s ease-in-out";
    fetureImage34.style.transform = "scale(1)";
}

let featureImage34Text = document.getElementById("featureImage34Text");
featureImage34Text.addEventListener("mouseover", fetureImage34In);
featureImage34Text.addEventListener("mouseleave", fetureImage34Out);

let imageSelect34 = document.getElementById("image34");
imageSelect34.addEventListener("mouseover", fetureImage34In);
imageSelect34.addEventListener("mouseleave", fetureImage34Out);

//news section image set 18 image2 zoom in and out
let fetureImage35 = document.getElementById("featuredImage35");
function fetureImage35In() {
    fetureImage35.style.transition = "0.2s ease-in-out";
    fetureImage35.style.transform = "scale(1.03)";
}

function fetureImage35Out() {
    fetureImage35.style.transition = "0.1s ease-in-out";
    fetureImage35.style.transform = "scale(1)";
}

let featureImage35Text = document.getElementById("featureImage35Text");
featureImage35Text.addEventListener("mouseover", fetureImage35In);
featureImage35Text.addEventListener("mouseleave", fetureImage35Out);

let imageSelect35 = document.getElementById("image35");
imageSelect35.addEventListener("mouseover", fetureImage35In);
imageSelect35.addEventListener("mouseleave", fetureImage35Out);

//section 3 chnages
let lable2 = document.getElementById("oldTraditions");
let label3 = document.getElementById("label3");
let fullStory = document.getElementById("fullStory");

function section3In() {
    lable2.style.textDecoration = "underline";
    label3.style.backgroundColor = "white";
    fullStory.style.color = "#990000";
    label3.style.transition = "all 0.3s"
}

function section3out() {
    lable2.style.textDecoration = "none";
    label3.style.backgroundColor = "";
    fullStory.style.color = "";
}

lable2.addEventListener("mouseover", section3In);
lable2.addEventListener("mouseleave", section3out);
label3.addEventListener("mouseover", section3In);
label3.addEventListener("mouseleave", section3out);

//styleing to 4th section left box support penn
let supportPennText = document.getElementById("supportPennText");
let leftBoxOuter = document.getElementById("leftBoxOuter");

function supportPenIn() {
    supportPennText.style.transition = "all 0.2s";
    supportPennText.style.border = "thin solid rgb(1,31,91)";
    supportPennText.style.backgroundColor = "rgb(1,31,91)";
    supportPennText.style.color = "white";
    leftBoxOuter.style.boxShadow = "-2px 10px 20px rgb(213,213,214)";
    leftBoxOuter.style.transition = "all 0.2s";
}

function supportPenOut() {
    supportPennText.style.backgroundColor = "";
    supportPennText.style.color = "";
    leftBoxOuter.style.boxShadow = "";
    supportPennText.style.border = "";
}

supportPennText.addEventListener("mouseover", supportPenIn);
supportPennText.addEventListener("mouseleave", supportPenOut);

//styleing to 4th section Right box support penn
let carePennText = document.getElementById("carePennText");
let rightBoxOuter = document.getElementById("rightBoxOuter");

function carePenIn() {
    carePennText.style.transition = "all 0.2s";
    carePennText.style.backgroundColor = "white";
    carePennText.style.border = "thin solid white";
    carePennText.style.color = "rgb(166,0,0)";
    rightBoxOuter.style.boxShadow = "-2px 10px 20px #D2D2D2";
    rightBoxOuter.style.transition = "all 0.2s";
}

function carePenOut() {
    carePennText.style.backgroundColor = "";
    carePennText.style.color = "";
    rightBoxOuter.style.boxShadow = "";
    carePennText.style.border = "";
}

carePennText.addEventListener("mouseover", carePenIn);
carePennText.addEventListener("mouseleave", carePenOut);

//fifth Section left Image Changes
let instaCircle = document.getElementById("instaCircle");
let appearTextStayConnectedLeftBox = document.getElementById("appearTextStayConnectedLeftBox");
let leftBoxAtag = document.getElementById("leftBoxAtag");
let secondBox1 = document.getElementById("secondBox1");

function stayConnectedLeftBoxIn() {
    appearTextStayConnectedLeftBox.style.display = "block";
    instaCircle.style.backgroundColor = "rgba(168,110,104,0.5)";
    instaCircle.style.borderRadius = "50%";
    instaCircle.style.padding = "10px";
    instaCircle.style.fontSize = "15px";
    instaCircle.style.width = "15px";
    instaCircle.style.textAlign = "center";
    instaCircle.style.textDecoration = "none";
    instaCircle.style.margin = "5px 2px;";
    secondBox1.style.display = "block";
}

function stayConnectedLeftBoxOut() {
    appearTextStayConnectedLeftBox.style.display = "none";
    secondBox1.style.display = "none";
}

leftBoxAtag.addEventListener("mouseover", stayConnectedLeftBoxIn);
leftBoxAtag.addEventListener("mouseleave", stayConnectedLeftBoxOut);

//fifth Section right Image Changes
let instaCircleRight = document.getElementById("instaCircleRight");
let appearTextStayConnectedRightBox = document.getElementById("appearTextStayConnectedRightBox");
let RightBoxAtag = document.getElementById("RightBoxAtag");
let secondRight = document.getElementById("secondRight");

function stayConnectedRightBoxIn() {
    appearTextStayConnectedRightBox.style.display = "block";
    instaCircleRight.style.backgroundColor = "rgba(168,110,104,0.5)";
    instaCircleRight.style.borderRadius = "50%";
    instaCircleRight.style.padding = "10px";
    instaCircleRight.style.fontSize = "15px";
    instaCircleRight.style.width = "15px";
    instaCircleRight.style.textAlign = "center";
    instaCircleRight.style.textDecoration = "none";
    instaCircleRight.style.margin = "5px 2px;";
    secondRight.style.display = "block";
}

function stayConnectedRightBoxOut() {
    appearTextStayConnectedRightBox.style.display = "none";
    secondRight.style.display = "none";
}

RightBoxAtag.addEventListener("mouseover", stayConnectedRightBoxIn);
RightBoxAtag.addEventListener("mouseleave", stayConnectedRightBoxOut);

//sixth Section
let sixthSectionButton = document.getElementById("sixthSectionButton");
let sixthSectionButtonText = document.getElementById("sixthSectionButtonText");

function sixthSectionButtonIn() {
    sixthSectionButton.style.backgroundColor = "white";
    sixthSectionButtonText.style.color = "#011F5B";
    sixthSectionButton.style.transition = "0.3s";
}

function sixthSectionButtonOut() {
    sixthSectionButton.style.backgroundColor = "";
    sixthSectionButtonText.style.color = "";
}

sixthSectionButton.addEventListener("mouseover", sixthSectionButtonIn);
sixthSectionButton.addEventListener("mouseleave", sixthSectionButtonOut);

// back to top button
let angleUp = document.getElementById("angleUp");
let backtop = document.getElementById("backtop");

function backToTop() {
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = "smooth";

}

angleUp.addEventListener("click", backToTop);
backtop.addEventListener("click", backToTop);


//our history button
let topRightHistroyButton = document.getElementById("topRightHistroyButton");

function seeOurHistoryButtonIn() {
    topRightHistroyButton.style.backgroundColor = "white";
    topRightHistroyButton.style.color = "#011F5B";
}
function seeOurHistoryButtonOut() {
    topRightHistroyButton.style.backgroundColor = "transparent";
    topRightHistroyButton.style.color = "white";
    topRightHistroyButton.style.transition = "0.3s";
}

topRightHistroyButton.addEventListener("mouseover", seeOurHistoryButtonIn);
topRightHistroyButton.addEventListener("mouseleave", seeOurHistoryButtonOut);

//news section image 1 zoom update 2022.7.14
let event2DetailsHeading = document.getElementById("event2DetailsHeading");
let even1Image = document.getElementById("even1Image");

function newsImage1In() {
    even1Image.style.transition = "0.2s ease-in-out";
    even1Image.style.transform = "scale(1.03)";
    event2DetailsHeading.style.textDecoration = "underline";
}

function newsImage1Out() {
    even1Image.style.transition = "0.1s ease-in-out";
    even1Image.style.transform = "scale(1)";
    event2DetailsHeading.style.textDecoration = "";
}

event2DetailsHeading.addEventListener("mouseover", newsImage1In);
event2DetailsHeading.addEventListener("mouseleave", newsImage1Out);
even1Image.addEventListener("mouseover", newsImage1In);
even1Image.addEventListener("mouseleave", newsImage1Out);

//news section image 2 zoom update 2022.7.14
let event3DetailsHeading = document.getElementById("event3DetailsHeading");
let event3Image = document.getElementById("event3Image");

function newsImage2In() {
    event3Image.style.transition = "0.2s ease-in-out";
    event3Image.style.transform = "scale(1.03)";
    event3DetailsHeading.style.textDecoration = "underline";
}

function newsImage2Out() {
    event3Image.style.transition = "0.1s ease-in-out";
    event3Image.style.transform = "scale(1)";
    event3DetailsHeading.style.textDecoration = "";
}

event3DetailsHeading.addEventListener("mouseover", newsImage2In);
event3DetailsHeading.addEventListener("mouseleave", newsImage2Out);
event3Image.addEventListener("mouseover", newsImage2In);
event3Image.addEventListener("mouseleave", newsImage2Out);

//searh area functions
let searchBarOuter = document.getElementById("searchBarOuter");
let searchIcon = document.getElementById("searchIcon");
let closeButton = document.getElementById("closeButton");
let closemark1 = document.getElementById("closemark1");

function searchBarApper() {
    searchBarOuter.style.display = "block";
    searchIcon.style.display = "none";
    closemark1.style.display = "block";
    document.getElementById("searchField").focus();

}

function searchBarDissapper() {
    searchBarOuter.style.display = "none";
    searchIcon.style.display = "";
    closemark1.style.display = "";
}

searchIcon.addEventListener("click", searchBarApper);
closeButton.addEventListener("click", searchBarDissapper);
closemark1.addEventListener("click", searchBarDissapper);

// leave for naviagtion sublist by serch field
function dissapperNavBar1() {
    acedemicSublists.style.display = "none";
    aboutSubList.style.display = "none";
    lifeAtpen.style.display = "none";
    researchAndInnovations.style.display = "none";
}

searchBarOuter.addEventListener("mouseenter", dissapperNavBar1);

//apper the resorces list
let resourcesButton = document.getElementById("resourcesButton");
let resorcesList = document.getElementById("resorcesList");
let listButtonUP = document.getElementById("listButtonUP");

function resourcesListApper() {
    resorcesList.style.display = "block";
    searchBarOuter.style.display = "none";
    closemark1.style.display = "none";
    searchIcon.style.display = "block";
}

function resourcesListdisapper() {
    resorcesList.style.display = "none";
}

resourcesButton.addEventListener("click", resourcesListApper);
listButtonUP.addEventListener("click", resourcesListdisapper);
resorcesList.addEventListener("mouseleave", resourcesListdisapper);

// video controls

let pauseV = document.getElementById("pauseV");
let playV = document.getElementById("playV");
let backVideo = document.getElementById("backVideo");

function pauseTheVideo() {
    backVideo.pause();
    playV.style.display = "block";
    pauseV.style.display = "none";
}
function playTheVideo() {
    backVideo.play();
    playV.style.display = "none";
    pauseV.style.display = "block";
}

pauseV.addEventListener("click", pauseTheVideo);
playV.addEventListener("click", playTheVideo);


function playVideo(){
    if(backVideo.play){
        backVideo.pause();
        playV.style.display = "block";
        pauseV.style.display = "none";
    }
    else{
        backVideo.play();
        playV.style.display = "none";
        pauseV.style.display = "block";
    }
}


function pauseVideo(){
    if(backVideo.pause){
        backVideo.play();
        playV.style.display = "none";
        pauseV.style.display = "block";
    }
    else{
        backVideo.pause();
        playV.style.display = "block";
        pauseV.style.display = "none";
    }
}
backVideo.addEventListener("click",playVideo);
backVideo.addEventListener("dblclick",pauseVideo);

function mouseOverVideo(){
    playV.style.backgroundColor = "hsl(0, 0%, 100%,0.3)";
    pauseV.style.backgroundColor = "hsl(0, 0%, 100%,0.3)";
}

function mouseLeaveVideo(){
    playV.style.backgroundColor = "";
    pauseV.style.backgroundColor = "";
}


backVideo. addEventListener("mouseover",mouseOverVideo);
backVideo. addEventListener("mouseleave",mouseLeaveVideo);