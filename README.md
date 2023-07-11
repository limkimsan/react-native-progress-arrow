# react-native-progress-arrow

<span><img src="https://github.com/limkimsan/react-native-progress-arrow/assets/18114944/eebe2e62-ae2c-4671-8898-a6c0dbc25de6.png" width="250" height="500" /></span>

React native progress arrow is a progress step indicator with an arrow style.

## Support
iOS & Android

## Installation

```sh
npm install react-native-progress-arrow
```

## Installing dependencies
```sh
npm install react-native-svg
```

- [react-native-svg](https://github.com/software-mansion/react-native-svg)

## Usage

```js
import ProgressArrow from 'react-native-progress-arrow';

// ...
<ProgressArrow
    steps={5}
    step={2}
    color={'blue'}
    customLabelStyle={{color: 'red', fontWeight: 'bold', fontSize: 20}}
    customProgressStyle={{height: 60}}
/>
```

## Properties

#### Basic
| Prop               |    Default    |    Type    | Description                                                                      |
| :----------------- | :-----------: | :--------: | :------------------------------------------------------------------------------- |
| steps              |       0       |  `number`  | The number of progres step                                                       |
| step               |       0       |  `number`  | The current step                                                                 |
| color              |    'blue'     |  `string`  | The background color of the progress step                                        |


#### Custom styles

| Prop                    |    Default    |    Type    | Description                                                                |
| :---------------------- | :-----------: | :--------: | :------------------------------------------------------------------------- |
| customContainerStyle    |     {...}     |  `style`   | Style of the main constainer                                               |
| customProgressStyle     |     {...}     |  `style`   | Style of the progress bar                                                  |
| customLabelStyle        |     {...}     |  `style`   | Style of the progress label                                                |


<!-- ## License

MIT -->

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
