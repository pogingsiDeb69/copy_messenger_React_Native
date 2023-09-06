import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.three_dot}>
          <View style={styles.three_dots}>
          </View>
          <View style={styles.three_dots}>
          </View>
          <View style={styles.three_dots}>
          </View>
        </View>
        <View style={styles.chats}>
          <Text style={styles.chat_text}>Chats</Text>
        </View>
        <Image source={{ uri: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-camera-512.png' }} style={styles.three_dot} />
        <Image source={{ uri: 'data:image/png;base64,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' }} style={styles.three_dot} />
      </View>
      <View style={styles.searchBar}>
        <Image source={{ uri: 'https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/bd49086d-d1e3-4e80-e82c-17b88b241a00/preview' }} style={styles.three_dot} />
        <Text style={styles.search_text}>Search people, channels & more</Text>
      </View>
      <View style={styles.userlist}>
        <View>
          <View style={{justifyContent:'center', alignContent:'center', alignSelf:'center'}}>
            <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View style={{alignContent:'center'}}>
            <Text style={styles.userlistsname}>Alyssa Mae</Text><Text style={styles.userlistsname}>Dequina</Text>
          </View>

        </View>
        <View>
          <View>
            <Image source={{ uri: 'https://scontent.fmnl17-2.fna.fbcdn.net/v/t39.30808-6/215632783_4300528570014755_37099658016417173_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFB9Fh1ElNEO6blF8ruR8FK2uHgD66oBDHa4eAPrqgEMWUsZsolqmvn_9_CH_IPqbCW8Ws9MoYk8_ORuGK9dW7t&_nc_ohc=2ha8IFfz0k0AX_Dt41P&_nc_oc=AQk169dnSex9KkOt_bqm8fEF_2WBAuA0jdrXcWUBfx6nOcp0lAFz7uaOBluBrjjmBAA&_nc_ht=scontent.fmnl17-2.fna&oh=00_AfAZ_TzF7YXy79lfNqHCOL7k1Fmage4FWozv6ReOTMYBzw&oe=64FC9888' }} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View style={{alignContent:'center'}}>
            <Text style={styles.userlistsname}>Athenasia</Text><Text style={styles.userlistsname}>Fides</Text>

          </View>
        </View>
        <View>
          <View>
            <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/324243268_872697383774386_6025411213792331187_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=52f669&_nc_eui2=AeGQTWoaGJ9EbiEth5TmM70tOvAXGxJRx2M68BcbElHHY5r-SHgaxRzyknHG3Dy2wHH6ibqlmDXOIfGvftKm27Na&_nc_ohc=CwL84ayDw30AX8lRBD-&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfChPfGIdVmQ7nMK_WaTqzNcfhqIW2_EeThUpgKzBP7N3w&oe=64FC31CC' }} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View style={{alignContent:'center'}}>
            <Text style={styles.userlistsname}>Lovelyn</Text><Text style={styles.userlistsname}>Magsino</Text>

          </View>
        </View>
        <View>
          <View>
            <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/327608177_566067635405306_6524142233386262693_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeE9OxXdn-L96lOlionWrEeOrtrQAP1I2Lau2tAA_UjYtmKtyDztYVp-FagdGDdYvogDZGIIJChg0czFyVKYRIxA&_nc_ohc=5MziCwEoW8YAX_tpcdO&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfDKQXTiZP_5ma31oc47nmpozEre5qvQVQJlfSkSOqCPmQ&oe=64FC145A' }} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View style={{justifyContent:'center'}}>
            <Text style={styles.userlistsname}>Norie</Text><Text style={styles.userlistsname}>Hangad</Text>

          </View>
        </View>
        <View>
          <View>
            <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/334220354_644916443865273_2115166916198197036_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeHrPFVU6AY6LfUDeKYdWHSSsGKNjeLEJp2wYo2N4sQmnXDec6aPTx-b6jSvePpSMu_pbfJKkGxpOc6uQgXrh5Wv&_nc_ohc=F_LysTvZJcAAX_IXnv0&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfBotgipCpVB_KLy0McbHUaD54Gskx66AgN_PTZyNFxjLg&oe=64FBF638' }} style={styles.userslisttop} />
            <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
              <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.userlistsname}>Nelbrey Jillian</Text><Text style={styles.userlistsname}> C. Escuadro</Text>

          </View>
        </View>



      </View>
      <View style={styles.chatss}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>

        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.seenImage} />


        </View>
      </View><View style={styles.chatss}>
        <View>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.seenImage} />


        </View>
      </View>
      <View style={styles.chatss}>
        <View>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.seenImage} />


        </View>
      </View><View style={styles.chatss}>
        <View>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.userslisttop} />
          <View style={{ backgroundColor: 'white', height: 20, width: 20, borderRadius: 80, position: 'absolute', marginTop: 50, marginLeft: 40, alignContent: 'center' }}>
            <View style={{ backgroundColor: 'green', height: 15, width: 15, borderRadius: 80, alignSelf: 'center', marginTop: 2 }}>
            </View>
          </View>
        </View>
        <View style={styles.chat_content}>
          <Text style={styles.username}>Alyssa Mae Dequina</Text>
          <Text style={styles.chat_contents}>Take your time sa dra. 22:25</Text>
        </View>
        <View style={{ alignContent: 'right', }}>
          <Image source={{ uri: 'https://scontent.fmnl17-3.fna.fbcdn.net/v/t39.30808-6/310850586_6236771983038223_6843745536045917716_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1b51e3&_nc_eui2=AeFIl6bqNSHlzdJKRIpE_ySv-Yi3B8ionfH5iLcHyKid8b2LUQJloOaApPKqT9OJrWGhtRkXXrD_tFElhLLkeUFW&_nc_ohc=HxGQjhTMrcAAX995dqY&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfC3kDQ_Q8Z_mPBCKO13LJReFnwuD-aIM30JqUsbn-I5oQ&oe=64FB73CE' }} style={styles.seenImage} />


        </View>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20

  },
  three_dot: {
    backgroundColor: '#ecf0f1',
    borderRadius: 70,
    height: 45,
    width: 45,
    alignContent: 'center',
    padding: 10,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  three_dots: {
    backgroundColor: 'black',
    width: 20,
    height: 3.5,
    alignSelf: 'center',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  chats: {
    flexGrow: 3,
    paddingLeft: 10,
  },
  chat_text: {
    fontSize: 30,
    fontWeight: '640',
  },
  searchBar: {
    backgroundColor: '#ecf0f1',
    height: 45,
    width: 'auto',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  search_text: {
    fontSize: 15,
    padding: 10,
    color: '#bdc3c7',
  },
  userslisttop: {
    borderRadius: 80,
    height: 60,
    width: 60,
    marginTop: 10,

  },
  userlist: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    columnGap: 15,
    alignContent: 'center',
    alignSelf:'center'

  },

  userlistsname: {
    textAlign:'center',
    justifyContent: 'center',

  },
  chatss: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  chat_content: {
    paddingLeft: 20,

  },
  username: {
    fontSize: 20,
    alignSelf: 'flex-start',
    marginTop: 15,
    marginRight: 70,

  },
  seenImage: {
    borderRadius: 80,
    height: 20,
    width: 20,
    marginTop: 30,

    alignSelf: 'left',
  },




});
