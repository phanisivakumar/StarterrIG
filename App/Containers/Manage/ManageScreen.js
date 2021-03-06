import React from "react";
import { Text, View, Button, FlatList, ActivityIndicator } from "react-native";
import CardJobManage from "../../Components/CardJobManage";
import ApplicationStyles from "../../Themes/ApplicationStyles";

export default class ManageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  // renderSeparator = () => {
  //   return (
  //     <View
  //       style={{
  //         height: 1,
  //         width: "86%",
  //         backgroundColor: "#CED0CE",
  //         marginLeft: "14%"
  //       }}
  //     />
  //   );
  // };

  // renderHeader = () => {
  //   return <CardNotification />;
  //   //return <SearchBar placeholder="Type Here..." lightTheme round />;
  // };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
      <View style={ApplicationStyles.screen.container}>
        {/* <Text>Posters!</Text>
        <Button
          title="Go to Manage"
          onPress={() => this.props.navigation.navigate("Manage")}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        /> */}
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <CardJobManage
              title={`${item.name.first} ${item.name.last}`}
              subtitle={item.email}
              navigationProps={{ ...this.props.navigation }}
              //avatar={{ uri: item.picture.thumbnail }}
              //containerStyle={{ borderBottomWidth: 0 }}
            />
          )}
          keyExtractor={item => item.email}
          //ItemSeparatorComponent={this.renderSeparator}
          //ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
        />
      </View>
    );
  }
}

// import React from "react";
// import { Text, View, Button } from "react-native";

// export default class ManageScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Manage!</Text>
//         <Button
//           title="Go to Posters"
//           onPress={() => this.props.navigation.navigate("Posters")}
//         />
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate("Details")}
//         />
//       </View>
//     );
//   }
// }
