import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

function BenefitSkeleton() {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item alignItems="center">
        <SkeletonPlaceholder.Item width={'25%'} height={10} marginTop={10} />
        <SkeletonPlaceholder.Item flexDirection="row" marginTop={20}>
          <SkeletonPlaceholder.Item width={'25%'}>
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={10}
              marginBottom={10}
            />
            <SkeletonPlaceholder.Item width={'100%'} height={50} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={'25%'} marginHorizontal={20}>
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={10}
              marginBottom={10}
            />
            <SkeletonPlaceholder.Item width={'100%'} height={50} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item width={'25%'}>
            <SkeletonPlaceholder.Item
              width={'100%'}
              height={10}
              marginBottom={10}
            />
            <SkeletonPlaceholder.Item width={'100%'} height={50} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
}

export default BenefitSkeleton;
