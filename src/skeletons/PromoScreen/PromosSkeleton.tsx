import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function PromosSkeleton() {
  return (
    <SkeletonPlaceholder borderRadius={4}>
      <SkeletonPlaceholder.Item paddingHorizontal={10}>
        <SkeletonPlaceholder.Item width={'100%'} height={200} marginTop={10} />
        <SkeletonPlaceholder.Item width={'100%'} height={200} marginTop={10} />
        <SkeletonPlaceholder.Item width={'100%'} height={200} marginTop={10} />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

export default PromosSkeleton;
