/**
 * Created by lvbingru on 2/29/15.
 */
import {NativeModules, Platform, ImagePickerIOS} from 'react-native';

const SystemImagePicker = {
// option
// sourceType : the picker source (library, album, camera)
// savePhoto : if true, do save photo when take picture
// allowsEditing : if true, can edit image after pick
// videoMode : if true, do video things or open videos
// videoMaximumDuration : in second
// -- videoQuality : ios(0-2,high to low) android(0.0-1.0 low to high)
  openCameraDialog: (option) => {
    return new Promise((resolve, reject)=>{
      NativeModules.BBImagePicker.openCamera(option||{}, resolve, reject);
    });
  },
};

export default SystemImagePicker;