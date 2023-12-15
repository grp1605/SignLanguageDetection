const cameraButton = document.getElementById('cameraButton');

const videoElement = document.getElementById('videoElement');
let permission
cameraButton.addEventListener('click', async () => {
    const confirmation=confirm("Allow camera access?");
    if(confirmation)
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  
    permission = await navigator.mediaDevices.getUserMedia({ video: true });
    videoElement.srcObject = permission;
    videoElement.play();
    stopButton.disabled=false;
  } else {
    console.error('Error accessing the camera: ', error);
  }
});