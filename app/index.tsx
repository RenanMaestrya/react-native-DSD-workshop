import { fetchCharacters } from "@/api/fetch";
import { Card } from "@/components/Card";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import Styled from "styled-components/native";

export default function HomeScreen() {
  const [characters, setCharacters] = useState<Result[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    const getCharacters = async (page: number) => {
      try {
        const data = await fetchCharacters(page);
        setCharacters((prev) => [...prev, ...data.results]);
        setHasMore(data.info.next !== null);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    getCharacters(page);
  }, [page]);

  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <Title>Rick And Morty</Title>
      <FlatList
        data={characters}
        renderItem={({ item }: { item: Result }) => <Card props={item} />}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#ffffff" /> : null
        }
      />
    </Container>
  );
}

const Container = Styled.View`
  flex: 1;
  background-color: #000000;
  align-items: center;
  justify-content: start;
`;

const Title = Styled.Text`
  font-size: 48px;
  color: #ffffff;
  margin: 16px 0;
`;
