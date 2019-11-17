<template>
	<v-app id="inspire">
		<v-navigation-drawer v-model="drawer" app>
			<v-list dense>
				<v-list-item
					v-for="(sl, index) in sidebar_links"
					:key="index"
					link
				>
					<v-list-item-action>
						<v-icon>{{ sl.icon }}</v-icon>
					</v-list-item-action>

					<router-link :to="sl.to">{{ sl.text }}</router-link>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app color="indigo" dark>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" />
			<v-toolbar-title>Fake Twitter </v-toolbar-title>
			<v-banner single-line
				>Logged in as: {{ displayState.handle }}</v-banner
			>
		</v-app-bar>

		<v-content>
			<p>Here is your state: {{ displayState }}</p>
			<router-view></router-view>
			<v-divider></v-divider>
		</v-content>
		<v-footer color="indigo" app>
			<span class="white--text">&copy; 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	props: {
		source: String
	},

	data: () => ({
		drawer: null
	}),
	computed: {
		username() {
			return this.$store.state.user;
		},
		displayState() {
			return this.$store.state;
		},
		sidebar_links() {
			let base_links = [
				{
					to: { name: "Home" },
					text: "homepage",
					icon: "mdi-message-text"
				},
				{
					to: { name: "DMs" },
					text: "messages",
					icon: "mdi-access-point"
				},
				{
					to: { name: "Settings" },
					text: "settings",
					icon: "mdi-settings-outline"
				},
				{
					to: { name: "Tweet" },
					text: "Send a tweet",
					icon: "mdi-send-outline"
				}
			];
			// "if signed in"
			if (this.$store.state.user) {
				base_links.push({
					to: { name: "Sign out" },
					text: "Sign out",
					icon: "mdi-door-open"
				});
				// "if not signed in aka if signed out"
			} else {
				base_links.push(
					{
						to: { name: "Login" },
						text: "Log In",
						icon: "mdi-login"
					},
					{
						to: { name: "Sign up" },
						text: "Sign up",
						icon: "mdi-account-heart-outline"
					}
				);
			}
			return base_links;
		}
	}
};
</script>
