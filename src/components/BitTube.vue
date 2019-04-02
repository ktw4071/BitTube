<template>
	<div id="app">
	  <v-app
	    dark
	    id="inspire"
	  >
	    <v-navigation-drawer
	      
	      clipped
	      v-model="drawer"
	      app
	    >
	      <v-list dense>
	        <v-list-tile v-for="item in items" :key="item.text" @click="">
	          <v-list-tile-action>
	            <v-icon>{{ item.icon }}</v-icon>
	          </v-list-tile-action>
	          <v-list-tile-content>
	            <v-list-tile-title>
	              {{ item.text }}
	            </v-list-tile-title>
	          </v-list-tile-content>
	        </v-list-tile>
	        <v-subheader class="mt-3 grey--text text--darken-1">TEAM MEMBERS</v-subheader>
	        <v-list>
	          <v-list-tile v-for="item in items2" :key="item.text" avatar @click="">
	            <v-list-tile-avatar>
	              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
	            </v-list-tile-avatar>
	            <v-list-tile-title v-text="item.text"></v-list-tile-title>
	          </v-list-tile>
	        </v-list>
	        <v-list-tile class="mt-3" @click="">
	          <v-list-tile-action>
	            <v-icon color="grey darken-1">add_circle_outline</v-icon>
	          </v-list-tile-action>
	          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
	        </v-list-tile>
	        <v-list-tile @click="">
	          <v-list-tile-action>
	            <v-icon color="grey darken-1">settings</v-icon>
	          </v-list-tile-action>
	          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
	        </v-list-tile>
	      </v-list>
	    </v-navigation-drawer>
	    <v-toolbar
	      color="red"
	      dense
	      fixed
	      clipped-left
	      app
	    >
	      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
	      <!-- <v-icon class="mx-3">fa-youtube</v-icon> -->
	      <v-img src="./bit-logo-squre.png" max-height="48px" max-width="48px" min-height="48px" min-width="48px" ></v-img>
	      <v-toolbar-title class="mr-5 align-center">
	        <span class="title">BitTube</span>
	      </v-toolbar-title>
	      <v-spacer></v-spacer>
	      <v-layout row align-center style="max-width: 650px">
	        <v-text-field
	          placeholder="Search..."
	          single-line
	          append-icon="search"
	          :append-icon-cb="() => {}"
	          color="white"
	          hide-details
	        ></v-text-field>
	      </v-layout>
	    </v-toolbar>
	    <v-content>
	      <v-container fill-height grid-list-xl>
	        <v-layout row wrap justify-center align-center>
	        	<v-flex v-for="(playerOption, index) in playerOptions" xs12 sm6 md4 lg3>
	        		<xgplayer :options="playerOption"></xgplayer>
	        	</v-flex>
	        </v-layout>
	      </v-container>
	    </v-content>
	  </v-app>
	</div>
</template>

<script>
	export default {
    data: () => ({
      playerOptions: [
        {url: 'http://127.0.0.1:8000/1%20hp%20genji_18-09-19_01-07-59.mp4', width: '100%', poster: 'http://127.0.0.1:8000/Capture.PNG'},
        {url: 'http://127.0.0.1:8000/ashe_blizzard_world_19-03-30_21-00-18.mp4', width: '100%'},
        {url: 'http://127.0.0.1:8000/bastion_hanamura_19-03-30_20-58-43.mp4', width: '100%'},
        {url: 'http://127.0.0.1:8000/blazer%20%EB%8B%98%EC%9D%98%20%EB%A7%88%EC%8A%A4%ED%84%B0%20%EC%8A%B9%EA%B8%89%EC%A0%84%20%EA%B2%90%EC%A7%80_18-04-11_00-06-54.mp4', width: '100%'},
        {url: 'http://127.0.0.1:8000/blazer%20%EB%8B%98%EC%9D%98%20%ED%95%98%EC%9D%B4%EB%9D%BC%EC%9D%B4%ED%8A%B8_18-09-10_21-48-48.mp4', width: '100%'},
        {url: 'http://127.0.0.1:8000/genji%20lunar_18-11-05_17-35-24.mp4', width: '100%'}
      ],		
      drawer: true,
      items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ],
      items2: [
        { picture: 28, text: 'Taewoo' },
        { picture: 38, text: 'Fahim' },
        { picture: 48, text: 'Sinclair' },
        { picture: 58, text: 'Ali' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>