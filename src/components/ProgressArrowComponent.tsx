import React from 'react';
import {View, Text} from 'react-native';
import Svg, {Polygon} from 'react-native-svg';

type progressArrowProps = {
  steps: number
  step: number
  color: string | 'blue'
  customContainerStyle: Object
  customProgressStyle: Object
  customLabelStyle: Object
}

const ProgressArrow = (props: progressArrowProps) => {
  const progressStepStyles = (index: number) => {
    let defaultStyles = { width: '100%', height: 12, justifyContent: 'center', width: '100%', position: 'relative' }
    if (index == 0)
      defaultStyles = {...defaultStyles, borderTopLeftRadius: 3, borderBottomLeftRadius: 3}
    else if (index == props.steps)
      defaultStyles = {...defaultStyles, borderTopRightRadius: 3, borderBottomRightRadius: 3}

    return (index + 1 == props.step) ? {...defaultStyles, backgroundColor: 'white'} : defaultStyles
  }

  const renderArrowHead = (index: number) => {
    if (index >= props.steps - 1) return;

    const color = index == (props.step - 2) ? props.color : 'white'
    const points = (index == (props.step - 1) || index == (props.step - 2)) ? "20,0 28,15 20,30 18,30 18,0" : "20,0 28,15 20,30 18,30 26,15 18,0"
    return <Svg height="30" width="30" style={{position: 'absolute', right: -22, top: 0}}>
              <Polygon points={points} fill={color} scale="0.4" />
           </Svg>
  }

  const renderArrows = () => {
    return [...Array(props.steps)].map((num, index) => {
      return <View key={`arrow-${index}`} style={{zIndex: 7 - index, flex: 1}}>
                <View style={progressStepStyles(index)}>
                  {renderArrowHead(index)}
                  <Text style={[{alignSelf: 'center', marginLeft: 2, paddingTop: 0.3, fontSize: 9, color: index + 1 == props.step ? props.color || 'blue' : 'white'}, props.customLabelStyle]}>
                    {index + 1}
                  </Text>
                </View>
             </View>
    });
  }

  return <View style={[{height: 24, justifyContent: 'flex-start', paddingTop: 4, backgroundColor: props.color || 'blue', paddingHorizontal: 16}, props.customContainerStyle]}>
            <View style={[{flexDirection: 'row', borderWidth: 0.5, borderColor: 'white', borderRadius: 4}, props.customProgressStyle]}>
              {renderArrows()}
            </View>
         </View>
}

export default ProgressArrow;