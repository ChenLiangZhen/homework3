import {Text} from "react-native";

export function VarText({children, type, ...props}){

   let styleObject = {}

   const xxl={ fontSize: 32, fontWeight: "bold"}
   const xl={ fontSize: 26, fontWeight: "bold"}
   const lg={ fontSize: 22}
   const md={ fontSize: 18}
   const sm={ fontSize: 16}
   const mc={ fontSize: 14}
   const nano={ fontSize: 12}

   switch(type){
      case "xxl":
         styleObject = xxl;
         break
      case "xl":
         styleObject = xl;
         break
      case "lg":
         styleObject = lg;
         break
      case "md":
         styleObject = md;
         break
      case "sm":
         styleObject = sm;
         break
      case "mc":
         styleObject = mc;
         break
      case "nano":
         styleObject = nano;
         break

   }

    return(
        <Text style={[styleObject, {...props}]}>
            {children}
        </Text>
    )
}

export function ParagraphText({children}){
    return(
        <Text style={{
            fontSize: 15
        }}>
            {children}
        </Text>
    )
}

export function NotionText({children}){
    return(
        <Text style={{
            fontSize: 13
        }}>
            {children}
        </Text>
    )
}