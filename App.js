import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';

export default function App(){
  const [theme, setTheme] = useState('#075E54');
  const [freeze, setFreeze] = useState(false);
  const [ghost, setGhost] = useState(true);
  const [saveViewOnce, setSaveViewOnce] = useState(true);
  const [hideView, setHideView] = useState(false);
  const [doubleTick, setDoubleTick] = useState(true);
  
  const colors = ['#075E54','#128C7E','#25D366','#000000','#FF0000','#800080','#0000FF','#FFA500'];

  return(
    <View style={{flex:1, backgroundColor:'#f0f0f0'}}>
      <StatusBar backgroundColor={theme} />
      <View style={{backgroundColor:theme, paddingTop:50, padding:20}}>
        <Text style={{color:'#fff', fontSize:26, fontWeight:'bold'}}>Stoney WhatsApp</Text>
        <Text style={{color:'#fff', fontSize:14}}>All 6 Features • by sweswe</Text>
      </View>

      <ScrollView style={{padding:16}}>
        <Text style={styles.section}>THEME COLOR</Text>
        <View style={{flexDirection:'row', flexWrap:'wrap', gap:12, marginTop:10}}>
          {colors.map(c=>(
            <TouchableOpacity key={c} onPress={()=>setTheme(c)} 
              style={{width:45,height:45,backgroundColor:c,borderRadius:22,borderWidth:theme===c?4:1,borderColor:theme===c?'#fff':'#ddd'}}/>
          ))}
        </View>

        <Text style={styles.section}>PRIVACY FEATURES</Text>
        <View style={styles.card}>
          <View style={{flex:1}}><Text style={styles.title}>1. Freeze Last Seen</Text><Text style={styles.desc}>Freeze your last seen time</Text></View>
          <Switch value={freeze} onValueChange={setFreeze} thumbColor={freeze?theme:'#ccc'} />
        </View>

        <View style={styles.card}>
          <View style={{flex:1}}><Text style={styles.title}>2. Ghost Mode</Text><Text style={styles.desc}>Hide Online / Typing / Recording</Text></View>
          <Switch value={ghost} onValueChange={setGhost} thumbColor={ghost?theme:'#ccc'} />
        </View>

        <View style={styles.card}>
          <View style={{flex:1}}><Text style={styles.title}>3. Save View Once</Text><Text style={styles.desc}>Save view once photos/videos</Text></View>
          <Switch value={saveViewOnce} onValueChange={setSaveViewOnce} thumbColor={saveViewOnce?theme:'#ccc'} />
        </View>

        <View style={styles.card}>
          <View style={{flex:1}}><Text style={styles.title}>4. Hide Status View</Text><Text style={styles.desc}>View status secretly</Text></View>
          <Switch value={hideView} onValueChange={setHideView} thumbColor={hideView?theme:'#ccc'} />
        </View>

        <View style={styles.card}>
          <View style={{flex:1}}><Text style={styles.title}>5. Custom Status Color</Text><Text style={styles.desc}>Change status ring color</Text></View>
          <Switch value={true} />
        </View>

        <View style={styles.card}>
          <View style={{flex:1}}><Text style={styles.title}>6. Double Tick Hide</Text><Text style={styles.desc}>Hide blue ticks</Text></View>
          <Switch value={doubleTick} onValueChange={setDoubleTick} thumbColor={doubleTick?theme:'#ccc'} />
        </View>

        <View style={{backgroundColor:theme, height:70, borderRadius:15, marginTop:20, justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'#fff', fontWeight:'bold'}}>Status Preview - {theme}</Text>
        </View>

        <View style={{height:100}} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  section:{fontWeight:'bold', marginTop:20, fontSize:16},
  card:{flexDirection:'row', backgroundColor:'#fff', padding:16, borderRadius:12, marginTop:12, elevation:3, alignItems:'center'},
  title:{fontWeight:'bold', fontSize:15},
  desc:{color:'#666', fontSize:12, marginTop:2}
})
