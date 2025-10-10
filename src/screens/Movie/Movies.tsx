import { getPopularMovies } from "@/src/services/MDBServices";
import React, { useEffect, useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance
} from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const { width, height } = Dimensions.get("window");
const data = [...new Array(6).keys()];

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>;

  useEffect(() => {
    getPopularMovies().then((res) => {
      setMovies(res);
      console.log("Popular Movies: ", res);
    });
  }, []);
  const progress = useSharedValue<number>(0);
  const ref = useRef<ICarouselInstance>(null);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Movies Component</Text>
      <View>
        <Carousel
          ref={ref}
          width={width}
          height={width / 2}
          data={data}
          onProgressChange={progress}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
                position: "relative"
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>

               <View style={styles.buttonSection}>
                <TouchableOpacity style={styles.button} >
                  <Text style={{ color: "#fff" }}>+ Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} >
                  <Text style={{ color: "#fff" }}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Movies;