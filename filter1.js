import React from 'react';
import{Image,View} from 'react-native';
const filter1=({  
    face:{
    bounds:{
        size:{width:faceWidth,height:faceHeight}
    },
    leftEyePosition,rightEyePosition,noseBasePosition
  }

})=>{
    const capWidth=faceWidth;
    const capHeight=faceHeight/3; 
    const capPosition=noseBasePosition          

    const transformAngle=(
    angleRad=Math.atan((rightEyePosition.y-leftEyePosition.y)/(rightEyePosition.x-leftEyePosition.x))

    )=>angleRad*180/Math.PI
  
    return(
        <View style={{
            position:'absolute',
            left:leftEyePosition.x-capWidth*0.675,
            top:leftEyePosition.y-capHeight*0.5
        }}>
            <Image 
            source={require('../assets/crown-pic1')}
            style={{
                width:capWidth,
                height:capHeight,
                resizeMode:'contain',
                position:capPosition,
                transform:[{rotate:`${transformAngle()}deg`}]
            }}
            />
        </View>
    )
}
export default filter1