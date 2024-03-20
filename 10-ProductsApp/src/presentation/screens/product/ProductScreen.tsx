import { Button, ButtonGroup, Input, Layout, Text, useTheme } from "@ui-kitten/components"
import { MainLayout } from "../../layouts/MainLayout"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { RootStackParams } from "../../navigation/StackNavigator";
import { StackScreenProps } from "@react-navigation/stack";
import { getProductById } from "../../../actions/products/get-product-by-id";
import { useRef } from "react";
import { ScrollView } from "react-native";
import { Gender, Product, Size } from "../../../domain/entities/product";
import { MyIcon } from "../../components/ui/MyIcon";
import { Formik } from "formik";
import { updateCreateProduct } from "../../../actions/products/update-create-product";
import { ProductImages } from "../../components/products/ProductImages";


const sizes: Size[] = [ Size.Xs, Size.S, Size.M, Size.L, Size.Xl, Size.Xxl ];
const genders: Gender[] = [ Gender.Kid, Gender.Men, Gender.Women, Gender.Unisex ];

interface Props extends StackScreenProps<RootStackParams, 'ProductScreen'> {};

export const ProductScreen = ( { route }: Props ) => {
  const productRef = useRef( route.params.productId );
  const theme = useTheme();
  const queryClient = useQueryClient();

  // useQuery
  const { isLoading, data: product } = useQuery({
    queryKey: ['product', productRef.current],
    staleTime: 1000 * 60 * 60, // 1 hour
    queryFn: () => getProductById( productRef.current ),
  });

  // useMutation
  const mutation = useMutation({
    mutationFn: ( data: Product ) => updateCreateProduct({ ...data, id: productRef.current }),
    onSuccess( data: Product ) {
      productRef.current = data.id;
      queryClient.invalidateQueries({ queryKey: ['products', 'infinite'] });
      queryClient.invalidateQueries({ queryKey: ['product', data.id] });
      // queryClient.setQueryData( ['product', data.id], data );
    },
  });

  if( !product ) return <MainLayout title="Cargando..." />;

  return (
    <Formik
      initialValues={ product }
      onSubmit={ mutation.mutate }
    >
      { ({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
        <MainLayout title={ values.title } subTitle={`Precio: ${ values.price }`}>
          <ScrollView style={{ flex: 1 }}>
            {/* Imágenes del producto */}
            <Layout style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
              <ProductImages images={ values.images } />
            </Layout>

            {/* Formulario */}
            <Layout style={{ marginHorizontal: 10 }}>
              <Input 
                label="Título"
                style={{ marginVertical: 5 }}
                value={ values.title }
                onChangeText={ handleChange('title') }
              />

              <Input 
                label="Slug"
                style={{ marginVertical: 5 }}
                value={ values.slug }
                onChangeText={ handleChange('slug') }
              />

              <Input 
                label="Descripción"
                value={ values.description }
                onChangeText={ handleChange('description') }
                multiline
                numberOfLines={ 5 }
                style={{ marginVertical: 5 }}
              />
            </Layout>

          {/* Precio e Inventario */}
            <Layout style={{ marginVertical: 5, marginHorizontal: 15, flexDirection: 'row', gap: 10 }}>
              <Input 
                label="Precio"
                value={ values.price.toString() }
                onChangeText={ handleChange('price') }
                style={{ flex: 1 }}
                keyboardType="numeric"
              />

              <Input 
                label="Inventario"
                value={ values.stock.toString() }
                onChangeText={ handleChange('stock') }
                style={{ flex: 1 }}
                keyboardType="numeric"
              />
            </Layout>
            
            {/* Selectores */}
            <ButtonGroup style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }} size="small" appearance="outline">
              {
                sizes.map( (size) => (
                  <Button 
                    key={ size }
                    style={{ flex: 1, backgroundColor: values.sizes.includes( size ) ? theme['color-primary-200'] : undefined }}
                    onPress={ () => setFieldValue( 
                      'sizes', 
                      values.sizes.includes( size ) ? values.sizes.filter( s => s !== size ) : [ ...values.sizes, size ]
                    ) }
                  >
                    { size }
                  </Button>
                ))
              }
            </ButtonGroup>
            
            <ButtonGroup style={{ margin: 2, marginTop: 20, marginHorizontal: 15 }} size="small" appearance="outline">
              {
                genders.map( (gender) => (
                  <Button 
                    key={ gender }
                    style={{ flex: 1, backgroundColor: values.gender.startsWith( gender ) ? theme['color-primary-200'] : undefined }}
                    onPress={ () => setFieldValue( 'gender', gender ) }
                  >
                    { gender }
                  </Button>
                ))
              }
            </ButtonGroup>

            {/* Botón de guardar */}
            <Button
              accessoryLeft={ <MyIcon name="save-outline" white /> }
              onPress={ () => handleSubmit() }
              disabled={ mutation.isPending }
              style={{ margin: 15 }}
            >
              Guardar
            </Button>

            <Layout style={{ height: 200 }} />
          </ScrollView>
        </MainLayout>
      )}
    </Formik>
  )
}
