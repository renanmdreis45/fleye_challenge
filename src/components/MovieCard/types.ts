export interface MovieCardProps {
    title: string;
    url: string;
    isFavorite: boolean;
    onPress?: () => void;
}